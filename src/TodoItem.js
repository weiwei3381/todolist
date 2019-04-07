import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        // 把this绑定提前到构造函数中
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content, test } = this.props;
        return (
            <li onClick={this.handleClick}>
                {test} {content}
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

// 使用propTypes对输入值类型进行校验
TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number.isRequired
}

// 如果没有给对应的属性传值, 则定义默认值
TodoItem.defaultProps = {
    test: "项目:"
}

export default TodoItem;