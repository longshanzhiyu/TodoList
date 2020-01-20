import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
import axios from 'axios';

class TodoList extends Component {

	constructor (props) {	
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
	}
 

	render() {
		return (
			<Fragment>
				<div>
				<label htmlFor="insertArea">输入内容</label>
				<input 
					id="insertArea"
					className='input'
					value={this.state.inputValue}
					onChange={this.handleInputChange}
					/>
				<button onClick={this.handleBtnClick}>提交</button></div>
				<ul>
					{this.getTodoList()}
				</ul>
			</Fragment>
		)
	}

	componentDidMount() {
		axios.get('http://localhost.charlesproxy.com:3000/api/todolist')
			.then((res) => { 
				// alert('success')
				console.log(res.data);
				this.setState(() => ({
					list: [...res.data]
				}));
				// this.setState(() => {
				// 	return {
				// 		list: res.data
				// 	}
				// });
			})
			.catch(() => {alert('error')})
	}

	getTodoList() {
		return this.state.list.map((item, index) => {
					return (
						<TodoItem  
							key = {item}
							content={item} 
							index={index}
							deleteItem={this.handleItemDelete}
						/>
						// {/*<li key={index} onClick={this.handleItemDelete.bind(this, index)} dangerouslySetInnerHTML={{__html: item}}></li>*/}
					)
				})
	}

	handleInputChange(e) {
		const value = e.target.value;
		this.setState(() => ({
			inputValue: value
		}));

		// this.setState({
		// 	inputValue: e.target.value
		// })
	}

	handleBtnClick() {

		this.setState((prevState) => ({
			list:[...prevState.list, prevState.inputValue],
			inputValue: ''
		}));

		// this.setState({
		// 	list:[...this.state.list, this.state.inputValue],
		// 	inputValue: ''
		// })
	}

	handleItemDelete(index) {
		// console.log(index);
		// immutable
		// state不允许我们做任何的变化 所以不允许 this.setState({list:this.state.list.splice(index, 1)}) 这样写
		// const list = [...this.state.list];
		// list.splice(index, 1);

		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {list};
		});
		// this.setState({
		// 	list: list
		// })
	}
}

export default TodoList;