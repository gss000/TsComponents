import React, { Component } from 'react';
import './Popover.less';

export interface Props {
	title?: string | number | React.ReactDOM; // 标题
	content: string | number | React.ReactDOM; // 内容
	trigger?: 'hover' | 'click'; // 显示类型
	children?: string | number | React.ReactDOM; // 子孙元素
}

interface State {}

export default class PopConfirm extends Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div className="PopWrap"></div>;
	}
}
