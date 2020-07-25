import React, { Component } from 'react';
import classnames from 'classnames';
import Portal from '../../common/utils/portal';
import './PopAlert.less';

export interface PopOverProps {
	title?: string | number | React.ReactDOM; // 标题
	content: string | number | React.ReactDOM; // 内容
	trigger?: 'hover' | 'click'; // 显示类型
	visible: boolean; // 是否显示浮层
}

interface State {}

export default class PopOver extends Component<PopOverProps, State> {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}

	defaultProps = {
		content: '弹框内容'
	};

	container: React.ReactNode;

	componentDidMount() {}

	componentWillReceiveProps(nextProps) {}

	getContainer() {
		const divNode = document.createElement('div');
		divNode.style.position = 'absolute';
		divNode.style.left = '0';
		divNode.style.top = '0';
		divNode.style.width = '100%';
		document.querySelector('.App')
			? document.querySelector('.App')!.appendChild(divNode)
			: document.body.appendChild(divNode);
		return divNode;
	}

	render() {
		const { title, content, visible } = this.props;
		const container = (
			<div className={classnames('PopWrap', { hide: !visible })}>
				<div className="mask"></div>
				<div className="main">
					{title && <div className="main-title">{title}</div>}
					<div className="main-content">{content}</div>
				</div>
			</div>
		);

		return [
			this.props.children,
			<Portal getContainer={this.getContainer}>{container}</Portal>
		];
	}
}
