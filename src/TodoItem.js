import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {

		const { content, test } = this.props;

		return (
			<div onClick={this.handleClick}>
				{test} - {content}
			</div>
		)
	}

	handleClick() {
		const {deleteItem, index} = this.props;
		deleteItem(index);
		//this.props.deleteItem(this.props.index);
	}
}

TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	contents: PropTypes.string,
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

TodoItem.defaultProps = {
	test: 'hello world'
}

export default TodoItem;