import React, { Component } from 'react';
import classnames from 'classnames';
import Portal from '../../common/utils/portal';
import { getMiddlePosition } from '../../common/utils/utils';
import './PopAlert.less';

export interface PopOverProps {
	title?: string | number | React.ReactDOM; // 标题
	content: string | number | React.ReactDOM; // 内容
	trigger?: 'hover' | 'click'; // 显示类型
	visible: boolean; // 是否显示浮层
}

interface State {
	visible: boolean;
	popTop: number | string;
}

export default class PopOver extends Component<PopOverProps, State> {
	constructor(props) {
		super(props);
		this.state = {
			popTop: 0,
			visible: false
		};
	}

	defaultProps = {
		content: '弹框内容'
	};

	container: React.ReactNode;
	popContent: React.ReactNode;

	componentWillMount() {
		// const { popTop } = this.state;
		// const { title, content, visible } = this.props;
		// const popWrapStyle = { top: popTop };
		// this.container = (
		// 	<div className={classnames('PopWrap', { hide: !visible })} style={popWrapStyle}>
		// 		<div className="mask"></div>
		// 		<div className="popAlert" ref={node => (this.popContent = node)}>
		// 			<div className="popAlert-content">
		// 				{title && <div className="pop-title">{title}</div>}
		// 				<div className="pop-content">{content}</div>
		// 			</div>
		// 			<div className="pop-close">X</div>
		// 		</div>
		// 	</div>
		// );
	}

	componentDidMount() {
		if (this.popContent) {
			const height = getMiddlePosition(this.popContent);
			console.log('popContent height:', height);
			this.setState({
				popTop: `${getMiddlePosition()}px`
			});
		}
	}

	// componentWillReceiveProps(nextProps) {}

	// 创建容器节点
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
		const { popTop } = this.state;
		const { title, content, visible } = this.props;
		const popWrapStyle = { top: popTop };

		return [
			this.props.children,
			<Portal getContainer={this.getContainer}>
				{
					<div className={classnames('PopWrap', { hide: !visible })} style={popWrapStyle}>
						<div className="mask"></div>
						<div className="popAlert" ref={node => (this.popContent = node)}>
							<div className="popAlert-content">
								{title && <div className="pop-title">{title}</div>}
								<div className="pop-content">{content}</div>
							</div>
							<div className="pop-close">X</div>
						</div>
					</div>
				}
			</Portal>
		];
	}
}
