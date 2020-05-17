import React, { Component } from 'react';
import { Button, Slider, Switch, Rate, PopConfirm, Popover } from '../components';
import './Hello.less';

class Hello extends Component<object> {
	switchClick = checked => {
		console.log(checked);
	};

	render() {
		return (
			<div className="hello">
				<p>TypeScript Demo</p>

				<section className="demo-wrap">
					<Button text="确定" className="hello-btn" onClick={() => alert('click')} />
				</section>

				<section className="demo-wrap">
					<h4>Slider</h4>
					<Slider disabled={true} />
				</section>

				<section className="demo-wrap">
					<h4>Switch：开关组件</h4>
					<Switch onClick={this.switchClick} />
				</section>

				<section className="demo-wrap">
					<h4>Rate：打分组件</h4>
					<div className="rate-item">
						<div className="item-label">不可点评</div>
						<Rate score={3} count={5} />
					</div>
					<div className="rate-item">
						<div className="item-label">可点评</div>
						<Rate
							score={3}
							count={5}
							onClick={score => console.log(`已点评：${score}`)}
							explain={['非常不满意', '不满意', '一般', '满意', '非常满意']}
						/>
					</div>
				</section>

				<section className="demo-wrap">
					<h4>气泡卡片</h4>
				</section>
			</div>
		);
	}
}

export default Hello;
