import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  render() {
    // render函数返回的JSX必须包裹在一个大的元素当中,如果不想显示外层元素，可以用Fragment作为占位符
    return (
      <Fragment>
        <div><input /><button>提交</button></div>
        <ul>
          <li>学英语</li>
          <li>Learning English</li>
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
