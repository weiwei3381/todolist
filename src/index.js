import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
// 使用了JSX语法,所以在本页面需要引入React
// JSX语法中，如果使用自己定义的组件，需要以大写字母开头
ReactDOM.render(<TodoList />, document.getElementById('root'));