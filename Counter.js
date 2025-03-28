import React from 'react';
import { PropTypes } from 'prop-types';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, onDecrementAsync }) => (
  <div style={containerStyle}>
    <h2 style={headingStyle}>🚀 Counter App</h2>

    <section style={sectionStyle}>
      <h3 style={subHeadingStyle}>Synchronous Operations</h3>
      <div style={buttonGroupStyle}>
        <button onClick={onIncrement} style={buttonStyle('#4CAF50')}>
          ➕ Increment
        </button>
        <button onClick={onDecrement} style={buttonStyle('#F44336')}>
          ➖ Decrement
        </button>
      </div>
    </section>

    <section style={sectionStyle}>
      <h3 style={subHeadingStyle}>Asynchronous Operations</h3>
      <div style={buttonGroupStyle}>
        <button onClick={onIncrementAsync} style={buttonStyle('#6C757D')}>
          ⏳ Increment after 1s
        </button>
        <button onClick={onDecrementAsync} style={buttonStyle('#6C757D')}>
          ⏳ Decrement after 1s
        </button>
      </div>
    </section>

    <div style={valueDisplayStyle}>
      Clicked: <span style={{ color: '#007BFF' }}>{value}</span> {value === 1 ? 'time' : 'times'}
    </div>
  </div>
);

// --- Styling ---
const containerStyle = {
  fontFamily: 'Segoe UI, sans-serif',
  maxWidth: '520px',
  margin: '3rem auto',
  padding: '2.5rem',
  border: '1px solid #e6e6e6',
  borderRadius: '16px',
  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
  backgroundColor: '#fff',
  textAlign: 'center'
};

const headingStyle = {
  fontSize: '1.8rem',
  marginBottom: '2rem',
  fontWeight: 600
};

const subHeadingStyle = {
  fontSize: '1.2rem',
  marginBottom: '1rem',
  fontWeight: 500
};

const sectionStyle = {
  marginBottom: '2.5rem'
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap'
};

const buttonStyle = (bgColor) => ({
  backgroundColor: bgColor,
  color: '#fff',
  border: 'none',
  padding: '0.6rem 1.2rem',
  fontSize: '1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  minWidth: '170px',
  fontWeight: 500,
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  whiteSpace: 'nowrap',
  ':hover': {
    backgroundColor: darkenColor(bgColor, 0.1)
  }
});

const valueDisplayStyle = {
  fontSize: '1.1rem',
  fontWeight: '500',
  marginTop: '2rem'
};

// Optional helper for darkening color
const darkenColor = (color, percent) => {
  const num = parseInt(color.replace("#",""),16),
        amt = Math.round(2.55 * percent * -100),
        R = (num >> 16) + amt,
        G = (num >> 8 & 0x00FF) + amt,
        B = (num & 0x0000FF) + amt;
  return "#" + (
    0x1000000 + 
    (R<255?R<1?0:R:255)*0x10000 + 
    (G<255?G<1?0:G:255)*0x100 + 
    (B<255?B<1?0:B:255)
  ).toString(16).slice(1);
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onDecrementAsync: PropTypes.func.isRequired
};

export default Counter;
