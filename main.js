import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga"

import Counter from './Counter'
import reducer from './reducers'
import { rootSaga  } from "./sagas"


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

const dispatch = type => store.dispatch({type})

sagaMiddleware.run(rootSaga);
function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => dispatch('INCREMENT')}
      onDecrement={() => dispatch('DECREMENT')}
      onIncrementAsync={() => dispatch('INCREMENT_ASYNC')}
      onDecrementAsync={() => dispatch('DECREMENT_ASYNC')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
