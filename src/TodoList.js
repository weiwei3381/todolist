import React from 'react';
import { connect } from 'react-redux';

// 改变成无状态组件
// TodoList是一个UI组件
const TodoList = (props)=>{
    // 结构赋值
    const { inputValue, changeInputValue, handleBtnClick, list } = props;

    return (
        <div>
            <div>
                <input
                    value={inputValue}
                    onChange={changeInputValue}
                />
                <button onClick={handleBtnClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

// 定义规则, 将store中的state映射到对象的属性中
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// store.dispatch挂载到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: "change_input_value",
                value: e.target.value
            }
            dispatch(action);
        },

        handleBtnClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        }
    }
}

// connect方法把UI组件和映射进行绑定, 生成容器组件.
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);