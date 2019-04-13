import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store'
import 'antd/dist/antd.css';
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'

class TodoList extends Component {
    constructor(props) {
        super(props);
        // 从redux的store中获取数据
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        // store发生变化之后, 可以使用该方法订阅 
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <div>
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <Input
                        value={this.state.inputValue}
                        placeholder="todo info"
                        style={{ width: "300px", marginRight: "10px" }}
                        onChange={this.handleInputChange}
                    />
                    <Button
                        onClick={this.handleBtnClick}
                        type="primary">提交</Button>
                    <List
                        style={{ marginTop: '10px', width: "380px" }}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }

    handleInputChange(e) {
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleBtnClick(){
        const action = {
            type: ADD_TODO_ITEM,
        }
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleItemDelete(index){
        const action = {
            type: DELETE_TODO_ITEM,
            index
        }
        store.dispatch(action);
    }
}

export default TodoList;