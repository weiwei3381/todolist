import React, {Component} from 'react'

class Test extends Component{
    // 当父组件的render函数运行时,子组件的render函数都将运行一次
    render(){
        console.log("test log");
        return <div>{this.props.content}</div>
    }
}

export default Test;