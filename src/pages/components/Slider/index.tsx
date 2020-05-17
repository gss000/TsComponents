import React, { Component, MouseEvent } from 'react';
import './index.less';

interface SliderProps {
	disabled?: boolean;
	defalutValue?: number;
}

interface SliderState {
	precent: number;
	disabled: boolean;
	unbind: boolean;
}

interface EventLinster {
	(type: string, callback: (e: any) => void): void;
}

class Slider extends Component<SliderProps, SliderState> {
	constructor(props) {
		super(props);
		this.state = {
			precent: 0,
			disabled: false,
			unbind: true
		};

		['handleClick', 'onMouseDown', 'onMouseUp'].forEach((method: string) => {
			this[method] = this[method].bind(this);
		});
	}

	sliderRail: HTMLElement | null;
	sPoint: HTMLElement | null;

	defaultProps = {
		disabled: false,
		defalutValue: 0
	};

	componentDidMount() {
		const { defalutValue = 0 } = this.props;
		this.setState({
			precent: defalutValue
		});
		document.addEventListener('onmouseup', this.onMouseUp);
	}

	handleClick(e: MouseEvent) {
		const ev = e.target as HTMLMapElement;
		const railWidth: number = this.sliderRail!.offsetWidth;
		const railLeft: number = this.sliderRail!.getBoundingClientRect().left;
		const evtWidth: number = e.clientX - railLeft;
		const precent: number = (evtWidth / railWidth) * 100;

		this.setState({
			precent: this.limitNumber(precent)
		});
	}

	limitNumber(num: number): number {
		let val: number = 0;
		val = num <= 0 ? 0 : num;
		val = val >= 100 ? 100 : val;
		return val;
	}

	onMouseDown(e: MouseEvent) {
		console.info('----------onMouseDown----------');
		e.stopPropagation();
		document.addEventListener('mousemove', this.moveFunc);
	}

	moveFunc = et => {
		console.log(` move: ${et.clientX};`);
		this.setState({
			precent: this.limitNumber(et.clientX)
		});
	};

	onMouseUp(e) {
		console.info('----------onMouseUp----------');
		document.onmousemove = null;
	}

	render() {
		const { disabled } = this.props;
		const { precent } = this.state;
		const precentVal = Math.round(precent); // 值取整
		const dynamicLeft = { left: `${precentVal - 1 < 0 ? 0 : precentVal - 1}%` };
		const dynamicWidth = { width: `${precentVal}%` };

		return (
			<div className="ts-slider" onClick={this.handleClick}>
				<div
					className="slider-rail"
					ref={node => {
						this.sliderRail = node;
					}}
					onClick={this.handleClick}
				></div>
				<div
					className="slider-process"
					style={dynamicWidth}
					onClick={this.handleClick}
				></div>
				<div
					className="slider-point"
					ref={dom => (this.sPoint = dom)}
					onMouseDown={this.onMouseDown}
					// onMouseUp={this.onMouseUp}
					style={dynamicLeft}
				></div>
				<div className="slider-step"></div>
			</div>
		);
	}
}

export default Slider;
