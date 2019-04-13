import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

// 为了让thunk和redux插件同时使用, 下面代码片段摘录自github项目(https://github.com/zalmoxisus/redux-devtools-extension)上的说明
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk), );

const store = createStore(reducer, enhancer);

export default store;