/**
 * dom元素挂载至目标元素
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component<any> {
	constructor(props) {
		super(props);
	}

	container: HTMLElement;

	componentDidMount() {
		this.createContainer();
	}

	createContainer() {
		this.container = this.props.getContainer();
		this.forceUpdate();
	}

	componentWillUnmount() {
		this.removeContainer();
	}

	removeContainer() {
		if (this.container) {
			this.container.parentNode!.removeChild(this.container);
		}
	}

	render() {
		// console.log(this.container);

		if (this.container) {
			return ReactDOM.createPortal(this.props.children, this.container);
		}

		return null;
	}
}

export default Portal;
