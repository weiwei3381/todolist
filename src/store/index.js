import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'


// 为了让thunk和redux插件同时使用, 下面代码片段摘录自github项目(https://github.com/zalmoxisus/redux-devtools-extension)上的说明
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));


const store = createStore(reducer, enhancer);

sagaMiddleware.run(todoSagas)

export default store;