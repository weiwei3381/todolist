import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        // 把this绑定提前到构造函数中
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }

    render() {
        const { content} = this.props;
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

// 使用propTypes对输入值类型进行校验
TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number.isRequired
}

export default TodoItem;