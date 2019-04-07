import React, { Component } from 'react'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        // 把this绑定提前到构造函数中
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content } = this.props;
        return (
            <li onClick={this.handleClick}>
                {content}
            </li>
        )
    }

    handleClick() {
        // 子组件使用父组件的方法和值
        // 下面的赋值等价于 deleteItem = this.props.deleteItem
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
}

export default TodoItem;