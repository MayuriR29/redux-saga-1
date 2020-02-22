import { takeLatest, put, all } from 'redux-saga/effects'

function* fetchNews() {
  const articles = yield fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
    .then(data => data)

  yield put({ type: 'NEWS_RECEIVED', json: articles })
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ]);
}