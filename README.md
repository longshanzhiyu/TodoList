# TodoList

ref 是获取真实DOM RN中不推荐直接操作真实DOM 但在一些动画中 需要用到ref


componentWillMount() 组件即将被挂载到页面上时自动调用 before render()
componentDidMount()	 组件被挂载到页面上后自动调用
注：这两个方法在更新时不被调用

shouldComponentUpdate() 组件被更新之前，它会被自动调用
在render()前调用

componentWillReceiveProps()	调用条件：1.一个组件要从父组件接收参数 2.只要父组件的render函数被重新执行了 
执行顺序：componentWillUpdate() -> render -> componentWillReceiveProps() -> 在componentDidUpdate()

性能优化：
	1.函数作用域绑定放到初始化函数中，一次调用，防止组件无谓的渲染；
	2.setState异步调用，可以合并连续调用为一次调用；
	3.虚拟DOM的比对，同层比对、key值比对，提升Dom的比对；
	4.shouldComponentUpdate(nextProps, nextState) 避免组件无谓的渲染；


ajax一般都放在componentDidMount函数中。

注意：在用Charles mock数据的时候 采用localhost.charlesproxy.com作为host
http://localhost.charlesproxy.com:3000/ 作为网址 而且可能浏览器用过vpn 要设置浏览器的代理为自动代理。


redux设计原则：
	1.store是唯一的
	2.只有store可以改变自己的内容
	3.Reducer必须是纯函数

redux的核心API
	createStore
	store.dispatch
	store.getState
	store.subscribe