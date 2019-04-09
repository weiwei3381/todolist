# 生命周期函数
生命周期函数的定义:是指在某个时刻组件会**自动调用执行**的函数.
react组件的四个生命周期:
1. 初始化(Initialization) 
2. 装载(Mounting)
   1. 组件即将被挂载到页面的时候执行: `componentWillMount()`)
   2. 页面渲染时候执行: `render()`
   3. 组件挂载之后执行: `componentDidMount()`
3. 组件更新(Updation)
   1. 判断组件是否要更新,需要返回一个布尔值(`true`或者`false`): `shouldComponentUpdate()`
   2. 组件被更新之前会被自动执行: `componentWillUpdate()`
   3. 页面更新: `render()`
   4. 组件更新之后自动执行: `componentDidUpdate()`
   5. 当一个组件从父组件接收参数,只要父组件的render函数被重新执行了,子组件的这个生命周期函数就会执行: `componentWillReceiveProps()`
4. 卸载(Unmounting)
   1. 当组件即将在页面中剔除时执行:`componentWillUnmount()`