# React入门与实战

## NPM的优化设置

为了快速安装包, 首先设置npm的安装源, 设置为淘宝源, 命令如下:

```bash
npm config set registry http://registry.npm.taobao.org
```

## 生命周期函数

生命周期函数的定义:是指在某个时刻组件会**自动调用执行**的函数.
react组件的四个生命周期:

1. 初始化(Initialization)  
2. 装载(Mounting)
   * 组件即将被挂载到页面的时候执行: `componentWillMount()`
   * 页面渲染时候执行: `render()`
   *. 组件挂载之后执行: `componentDidMount()`
3. 组件更新(Updation)
   * 判断组件是否要更新,需要返回一个布尔值(`true`或者`false`): `shouldComponentUpdate()`
   * 组件被更新之前会被自动执行: `componentWillUpdate()`
   * 页面更新: `render()`
   * 组件更新之后自动执行: `componentDidUpdate()`
   * 当一个组件从父组件接收参数,只要父组件的render函数被重新执行了, 子组件的这个生命周期函数就会执行: `componentWillReceiveProps()`
4. 卸载(Unmounting)
   * 当组件即将在页面中剔除时执行:`componentWillUnmount()`

## 生命周期函数应用

1. *子组件频繁渲染问题*: 由于父组件渲染时, 子组件的props和state即使没有发生变化,也会强制执行`render()`, 那么可以利用`shouldComponentUpdate(nextProps, nextState)`生命周期函数, 比对`nextProps`或者`nextState`与现有值的情况, 从而自由选择返回true或者false控制渲染.

2. *AJAX请求发送问题*: 异步获取AJAX请求数据, 放在`componentDidMount()`生命周期函数中, 只会执行一遍, 而且在`render()`函数运行之前, 在react中异步发送ajax请求可以使用`axios`库, 安装方式为`npm install axios`, 调用方式为:  
  
```JavaScript
    axios.get('/api/todolist')
      .then(() => { alert('succ') })
      .catch(() => { alert('error') });
```

## 使用Charles进行数据模拟

[Charles](https://www.charlesproxy.com)是一款全平台代理抓包软件, win下安装后无需配置就可以使用, 不过在使用中发现无法抓取localhost的包, 因此在使用中需要使用网络地址, 例如`192.168.43.6`, 这就意味着在不联网的单机情况下没有办法模拟api.  
在模拟api时, 利用的是Charles中的`tools`下的`local map`功能, 把地址转到特定的json文件实现模拟后端.

## 使用react-transition-group绘制动画

[react-transition-group](https://github.com/reactjs/react-transition-group)是一个动画插件, [demo文档](https://reactcommunity.org/react-transition-group/)里面有详细介绍, 在npm中的安装命令为`npm install react-transition-group --save`, 项目中的导入方式如下:

```JavaScript
import { CSSTransition, TransitionGroup } from 'react-transition-group';
```

具体demo可以查看文档中的事例, 如果需要对多个节点使用动画, 需要使用`TransitionGroup`, 代码片段如下:

```jsx
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
```

## 数据层框架Redux

**React**只是一个视图层框架, 在大型项目中组件之间的传值会变得十分复杂, 因此需要一个数据层框架进行辅助. **Redux**则是利用一个公共的存储区域`Store`存值, 直接从中调用数据.  

*Redux = Reducer + Flux*, Redux的前身是facebook开源的Flux框架, 不过因为存在一些问题, 改进加入了Reducer功能, 形成了现在的Redux框架.

Redux的工作流程如下:

1. React Component(*借书的人*): React中的组件
2. Action Creator(*借书的请求*): React Component(*借书的人*)发起想要获取特定State(*特定书籍*)的请求
3. Store(*图书管理员*): 具有查看所有State(*特定书籍*)的权限
4. Reducers(*图书索引*): Store(*图书管理员*)查询或者更新Reducers(*图书索引*)找到对应的State(*特定书籍*)

## 使用ant-design构建更加美观的todolist

[ant-design](https://ant.design/index-cn)是蚂蚁金服团队开源的一套UI框架, 安装方式为: `npm install antd --save`  
安装完成后, 引入样式文件`import 'antd/dist/antd.css'`
对于每种类型的控件, 可以直接在项目中引入`import { Input, Button, List } from 'antd'`, 然后使用即可,在[官方文档](https://ant.design/docs/react/introduce-cn)中可以查看每种控件使用方法, 其中设置每种类型组件的style需要使用json格式, 示例代码如下:

```jsx
<Input placeholder="todo info" style={{ width: "300px", marginRight: "10px" }} />
<Button type="primary">提交</Button>
<List
    style= {{marginTop: '10px', width: "380px"}}
    bordered
    dataSource={data}
    renderItem={item => (<List.Item>{item}</List.Item>)}
/>
```

## Redux框架的Store创建

首先在项目源码目录创建`store`文件夹, 然后在其中建立`index.js`文件, 这个文件就是store代码存放的位置. 创建store代码如下:

```javascript
import {createStore} from 'redux';
import reducer from './reducer'

const store = createStore(reducer);

export default store;
```

可以看到,在store创建时传入了reducer, 因此创建reducer, 新建`reducer.js`, reducer的返回值必须是一个函数, 示例代码如下:

```javascript
// 初始返回值
const defaultState = {
    inputValue: '123',
    list: [1,2]
};

export default (state = defaultState, action) =>{
    return state;
}
```

然后可以在页面中使用store了, 导入`import store from './store'`之后, 可以使用`store.getState()`方法取到值.

## redux修改State值

创建state和action, 利用`dispatch`方法转发给store, store会把数据交给reducer返回的函数进行处理, 在reducer中有一个限制,可以接受和返回state, 但是**绝不能**修改state. store发生变化之后, 可以使用`store.subscribe(this.handleStoreChange)`进行处理.  
定义`actionTypes.js`文件, 将所有的action对应的字符串定义成常量, 可以避免拼写错误造成的bug, 并且IDE中也能进行自动提示.  
定义`actionCreators.js`文件, 将所有action生成的过程抽取成函数, 这样可以把散落在代码中的action都放到一个地方进行管理.

## redux基础知识点总结

1. redux的三原则
    1. **store是唯一的**. 整个项目只定义一个store目录, 所有页面都使用的是一个store实例, 这是典型的单例模式.
    2. **只有store能够改变自己的内容**. reducer可以接收store中的state, 但是不能更改state, 只能利用深拷贝获取一个新state, 然后在新的state上进行修改, 然后将新state返回给store, 所有state的更新都是有store完成.
    3. **reducer必须是纯函数**. 所谓纯函数是指*给定固定的输入, 就一定会有固定的输出, 而且不会有任何的副作用*, 其中*固定输入*是指在reducer函数中, 不能有跟系统时间, 随机值, ajax请求等内容, 因为这样会使得返回值不受控制, 不固定. *副作用*是指对传入的参数的进行修改, 这就叫做产生副作用.
2. redux中的核心api
   1. `createStore()`可以帮助我们创建store, 需要传入reducer
   2. `store.dispatch()`可以帮助我们派发action.
   3. `store.getState`可以获取到store中的所有数据内容.
   4. `store.subscribe`可以订阅store的改变, 需要传入回调函数, 一旦store改变, 回调函数就会执行.

## UI组件和容器组件

现有的代码中, UI和逻辑代码交织在一起. 可以将UI和逻辑进行分离, 新建`TodoListUI.js`类, 然后把所有需要的函数和变量通过属性传值的方式进行, 需要注意的是, 如果传递的函数具有参数, 则需要用下面这种写法:  

```javascript
renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
```

这里面为了传递`index`变量, 在onClick事件中使用箭头函数传入变量, 然后使用带变量的函数.  
**无状态组件**: 当一个组件只有render函数时, 可以使用一个无状态组件替换, 无状态组件的性能比普通组件好, 示例代码如下:

```javascript
const TodoListUI = (props) => {
  return <div>{props.inputValue}</div>
}
```

## redux的中间件redux-thunk

redux的中间件需要在创建store的函数中引入, 主要目的是让转发的action可以返回一个**函数** (之前是必须为一个对象), 如果store发现转发的是一个函数, 则自动执行函数, 函数默认自带`dispatch`方法, 因此可以利用这个特性进行异步操作, 将所有异步操作集中到action中尽心管理, 同时也方便自动化测试.  
需要注意的是, 如果同时使用`redux-thunk`和redux插件, 则需要在store创建的时候进行一些操作, 示例代码如下:

```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'

// 为了让thunk和redux插件同时使用, 下面代码片段摘录自github项目(https://github.com/zalmoxisus/redux-devtools-extension)上的说明
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk), );

const store = createStore(reducer, enhancer);

export default store;
```

redux中间件指的是文件操作在Store和action中间, 简答来说就是给`store.dispatch()`增加一些其他的功能, 除了thunk以外, redux-logger可以记录action转发情况.  

## Redux-saga中间件使用

redux-thunk是将ajax请求和action放在一起, 但是如果想把ajax异步请求单独放在一块, 可以使用[redux-saga](https://github.com/redux-saga/redux-saga), 这个中间件可以把异步请求放到一个文件夹.  
原因在于redux-saga配置完成后, 转发的action除了store能接收以外, `sagas.js`文件也能收到, 这样就可以进行处理.