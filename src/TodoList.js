import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem';
import './style.css';

// todolist类
class TodoList extends Component {
  constructor(props) {
    super(props);
    // 当组件的state或者props发生改变时,render函数就会重新执行,使得页面发生变化
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }



  render() {
    // render函数返回的JSX必须包裹在一个大的元素当中,如果不想显示外层元素，可以用Fragment作为占位符
    // JSX中计算js表达式，需要加一对{}
    // 默认this为undefined, 需要通过bind方法设置this为当前TodoList实例
    // JSX真实的顺序: JSX -> JS对象(虚拟DOM) -> 真实的DOM
    // JSX本质是React.createElement('div', {id: 'item'}, 'item')
    console.log("render");
    return (
      <Fragment>
        <div>
          {/* jsx中怎么加注释, 花括号里面按照js方法加注释 */}
          {/* html中的class一般用className替换, for用htmlFor来替换 */}
          <label htmlFor="insertArea">输入内容:</label>
          {/* 通过ref来获取对应的dom节点,但是react不推荐直接使用ref来修改dom内容 */}
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => { this.input = input }}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  // 组件挂载之后执行
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 当组件即将被挂载到页面的时候执行
  componentWillMount() {
    console.log("componentWillMount");
  }

  // 组件被更新之前会被自动执行
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true
  }

  // 组件被更新之前会被自动执行
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  // 组件更新之后自动执行
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        // 父组件通过属性的方式传值给子组件
        <TodoItem
          content={item}
          key={index}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  // 处理输入事件
  handleInputChange() {
    // 新版react的setState方法应该传入一个函数
    const value = this.input.value;
    this.setState(() => ({
      inputValue: value
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }

  // 处理提交按钮点击事件
  handleBtnClick(e) {
    // setState函数中可以有prevState参数,表示没修改之前的state状态
    // setState是一个异步函数,第二个参数是一个执行成功的回调
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }), () => {
      console.log(this.ul.querySelectorAll('li').length);
    })
  }

  // 点击项删除
  handleItemDelete(index) {
    // react框架的immutable概念:
    // react中的state不允许我们做任何改变, 需要进行一个拷贝再操作
    this.setState((prevState) => {
      const list = [...prevState.list];
      // splice方法, 从index序列开始,删除1项
      list.splice(index, 1);
      return { list }
    })
  }

}

export default TodoList;
