# TodoList

ref 是获取真实DOM RN中不推荐直接操作真实DOM 但在一些动画中 需要用到ref


componentWillMount() 组件即将被挂载到页面上时自动调用 before render()
componentDidMount()	 组件被挂载到页面上后自动调用
注：这两个方法在更新时不被调用

shouldComponentUpdate() 组件被更新之前，它会被自动调用
在render()前调用

componentWillReceiveProps()	调用条件：1.一个组件要从父组件接收参数 2.只要父组件的render函数被重新执行了 
执行顺序：componentWillUpdate() -> render -> componentWillReceiveProps() -> 在componentDidUpdate()

