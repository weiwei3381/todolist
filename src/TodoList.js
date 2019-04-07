import React, { Component, Fragment } from 'react'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };

  }

  render() {
    // render函数返回的JSX必须包裹在一个大的元素当中,如果不想显示外层元素，可以用Fragment作为占位符
    // JSX中计算js表达式，需要加一对{}
    // 默认this为undefined, 需要通过bind方法设置this为当前TodoList实例
    return (
      <Fragment>
        <div>
          {/* jsx中怎么加注释, 花括号里面按照js方法加注释 */}
          {/* html中的class一般用className替换, for用htmlFor来替换 */}
          <label htmlFor="insertArea">输入内容:</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={this.handleItemDelete.bind(this, index)}>
                  {/* 如果想内容不被转义, 可以用dangerouslySetInnerHtml方法:
                  dangerouslySetInnerHTML = {{ __html: item }}
                  */}
                  {item}
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  // 处理输入事件
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 处理提交按钮点击事件
  handleBtnClick(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    })
  }

  // 点击项删除
  handleItemDelete(index) {
    // react框架的immutable概念:
    // react中的state不允许我们做任何改变, 需要进行一个拷贝再操作
    const list = [...this.state.list];
    // splice方法,从index序列开始,删除1项
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

}

export default TodoList;
