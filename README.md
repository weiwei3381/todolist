# React入门与实战
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
```axios.get('/api/todolist')
      .then(() => { alert('succ') })
      .catch(() => { alert('error') });```