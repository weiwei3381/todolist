import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <Input
                        value={this.props.inputValue}
                        placeholder="todo info"
                        style={{ width: "300px", marginRight: "10px" }}
                        onChange={this.props.handleInputChange}
                    />
                    <Button
                        onClick={this.props.handleBtnClick}
                        type="primary">提交</Button>
                    <List
                        style={{ marginTop: '10px', width: "380px" }}
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
}

export default TodoListUI;