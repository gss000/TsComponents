import React, { Component } from 'react';
import classnames from 'classnames';
import './index.less';

export interface ButtonProps {
	text: string | React.ReactElement<any>;
	size?: 'normal' | 'small' | 'large';
	className?: string;
	onClick?: () => void;
}

class Button extends Component<ButtonProps, object> {
	static defaultProps = {
		text: '按钮文案',
		size: 'normal'
	};

	render() {
		const { text, className, size, onClick, ...resProps } = this.props;

		const cls = classnames('btn', `btn-${size}`, className);

		return (
			<button className={cls} onClick={onClick} {...resProps}>
				{text || this.props.children}
			</button>
		);
	}
}

export default Button;
