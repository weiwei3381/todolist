import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'hello',
      list: []
    };

  }

  render() {
    // render函数返回的JSX必须包裹在一个大的元素当中,如果不想显示外层元素，可以用Fragment作为占位符
    // JSX中计算js表达式，需要加一对{}
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>学英语</li>
          <li>Learning English</li>
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue : e.target.value
    })
  }
}

export default TodoList;
