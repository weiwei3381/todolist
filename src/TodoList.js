import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store'
import 'antd/dist/antd.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        // 从redux的store中获取数据
        this.state = store.getState();
    }

    render() {
        return (
            <div>
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <Input value={this.state.inputValue} placeholder="todo info" style={{ width: "300px", marginRight: "10px" }} />
                    <Button type="primary">提交</Button>
                    <List
                        style={{ marginTop: '10px', width: "380px" }}
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        )

    }
}

export default TodoList;