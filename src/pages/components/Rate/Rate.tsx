import React, { Component, ReactNode } from 'react';
import './Rate.less';

const Heart = require('./images/heart.png');
const Unheart = require('./images/unheart.png');

export interface RateProps {
	score: number; // 评分
	count: number; // 评分总量
	type?: 'Star' | 'Heart'; // 评分类型
	explain?: string[]; // 评分说明文案，数组从差到好
	onClick?: (num: number) => void; // 点评后回调
}

interface RateState {
	score: number; // 评分
}

export default class Rate extends Component<RateProps, RateState> {
	constructor(props) {
		super(props);
		this.state = {
			score: 0
		};
	}

	static defaultProps: RateProps = {
		score: 0,
		count: 5,
		type: 'Heart'
	};

	renderRate(): ReactNode {
		const { score: num, count, type } = this.props;
		const { score = num } = this.state;
		const rates: ReactNode[] = [];

		for (let i: number = 0; i < count; i++) {
			rates.push(
				<li className="RateLi" key={i} onClick={() => this.handleClick(i)}>
					{<img src={i <= score ? Heart : Unheart} alt="" />}
				</li>
			);
		}
		console.log(this.props);

		return <ul className="RateUl">{rates}</ul>;
	}

	handleClick: (score: number) => void = score => {
		const { onClick } = this.props;

		if (onClick) {
			this.setState({ score });
			onClick(score + 1);
		}
	};

	renderRateExplain() {
		const { count, explain } = this.props;
		const { score } = this.state;

		if (!explain || explain!.length !== count) return null;

		return <div className="RateExplain">{explain[score]}</div>;
	}

	render() {
		return (
			<div className="RateWrap">
				{this.renderRate()}
				{this.renderRateExplain()}
			</div>
		);
	}
}
