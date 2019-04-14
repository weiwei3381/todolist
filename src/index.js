import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

// Provider是react-redux的一个核心组件, 它提供一个连接器, 使得里面所有的组件都有能力获取到store里面的数据
const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));