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
