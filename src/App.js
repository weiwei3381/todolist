import React, {Component} from 'react';

// 上面这一句导入等价于
// import React from 'react'
// const Component = React.Component

class App extends Component {
  render() {
    // return中含有JSX语法
    return (
      <div className="App">
        Hello World.
      </div>
    );
  }
}

export default App;
