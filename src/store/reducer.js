// 默认值
const defaultState = {
    inputValue: '',
    list: []
};

// 可以接受和返回state, 但是**绝不能**修改state. 
export default (state = defaultState, action) =>{
    if (action.type === "change_input_value"){
        // 受限利用JSON进行一次深拷贝state
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    }else if(action.type === "add_todo_item"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState
    }else if(action.type === "delete_todo_item"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState
    }
    return state;
}