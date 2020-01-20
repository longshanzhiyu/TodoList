import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
import Test from './Test';

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
		console.log('render');
		return (
			<Fragment>
				<div>
				<label htmlFor="insertArea">输入内容</label>
				<input 
					id="insertArea"
					className='input'
					value={this.state.inputValue}
					onChange={this.handleInputChange}
					ref={(input) => {this.input = input}}
					/>
				<button onClick={this.handleBtnClick}>提交</button></div>
				<ul ref={(ul) => {this.ul = ul}}>
					{this.getTodoList()}
				</ul>
				<Test content={this.state.inputValue}/>
			</Fragment>
		)
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
		// const value = e.target.value;
		const value = this.input.value;
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
		}), () => {
			console.log(this.ul.querySelectorAll('div').length);
		});

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