import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition  key={index}
                  // 入场动画的状态值
                  // in={this.state.show}
                  // 动画执行时间
                  timeout={1000}
                  // 设置css前缀
                  classNames='fade'
                  unmountOnExit
                  onEntered={(el) => { el.style.color = 'blue' }}
                  appear={true}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggole</button>
      </Fragment>
    )
  }

  handleAddItem() {
    this.setState((preState) => {
      return {
        list: [...preState.list, 'item']
      }
    })
  }
}

export default App;