import React from 'react';
import { Input, Button, List } from 'antd';

// 使用无状态组件
const TodoListUI = (props) => {
    return (
        <div>
            <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                <Input
                    value={props.inputValue}
                    placeholder="todo info"
                    style={{ width: "300px", marginRight: "10px" }}
                    onChange={props.handleInputChange}
                />
                <Button
                    onClick={props.handleBtnClick}
                    type="primary">提交</Button>
                <List
                    style={{ marginTop: '10px', width: "380px" }}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (<List.Item onClick={() => { props.handleItemDelete(index) }}>{item}</List.Item>)
                    }
                />
            </div>
        </div>
    )
}

export default TodoListUI;