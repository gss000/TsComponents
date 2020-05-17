import React from 'react';
import classnames from 'classnames';
import './index.less';

export interface SwitchProps {
	label?: string; // 标签内容
	checked?: boolean; // 是否选中
	disable?: boolean; // 是否可操作
	className?: string; // 类名
	onClick?: (checked?: boolean) => void;
}

interface SwitchState {
	checked?: boolean;
	disable?: boolean;
}

class Switch extends React.Component<SwitchProps, SwitchState> {
	static defaultProps = {
		disable: false,
		checked: true
	};

	constructor(props: SwitchProps) {
		super(props);
		const { checked, disable } = this.props;
		this.state = {
			checked,
			disable
		};
	}

	componentDidMount() {
		const { checked } = this.props;
		this.setState({ checked });
	}

	componentWillReceiveProps({ checked }: SwitchProps) {
		if (checked !== this.props.checked) {
			this.setState({ checked });
		}
	}

	handleClick = () => {
		this.setState(
			preState => ({
				checked: !preState.checked
			}),
			() => {
				const { onClick } = this.props;
				if (onClick) {
					onClick(this.state.checked);
				}
			}
		);
	};

	render() {
		const { checked } = this.state;
		const { className, disable, label, ...restProps } = this.props;
		const cls = classnames('switchBtn', className, { 'switch-checked': checked });

		return (
			<div>
				<button
					className={cls}
					disabled={disable}
					{...restProps}
					onClick={this.handleClick}
				>
					<span className="switch-name">{label}</span>
				</button>
			</div>
		);
	}
}

export default Switch;
