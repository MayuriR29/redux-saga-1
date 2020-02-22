import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger';
import reducer from './reducers'
import rootSaga from './sagas'
import App from './components/App'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)

render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

if (module.hot) { module.hot.accept(App) }