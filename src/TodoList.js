import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];


class TodoList extends Component {

    render() {
        return (
            <div>
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <Input placeholder="todo info" style={{ width: "300px", marginRight: "10px" }} />
                    <Button type="primary">提交</Button>
                    <List
                        style= {{marginTop: '10px', width: "380px"}}
                        bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        )

    }
}

export default TodoList;