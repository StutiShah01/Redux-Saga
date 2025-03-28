import { put, takeEvery ,all,take} from 'redux-saga/effects'

// this is the default generator function -called when application is loaded
export function* helloSaga() {
    console.log('Hello Sagas!')
  }

const delay =(ms) => new Promise(res=>setTimeout(res,ms))
// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* decrementAsync() {
  yield delay(1000)
  yield put({ type: 'DECREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
export function* watchDecrementAsync() {
  yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}


//this functions will execute only once
export function* OnceWatcherOnIncrement(){
  yield take('INCREMENT')
  alert("This will increment count by 1")
}
export function* OnceWatcherOnDecrement(){
  yield take('DECREMENT')
  alert("This will decrement count by 1")
}

export function* rootSaga()
{
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchDecrementAsync(),
    OnceWatcherOnIncrement(),
    OnceWatcherOnDecrement(),
  ])
}

