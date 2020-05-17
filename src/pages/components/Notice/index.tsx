/**
 * 滚动信息组件
 */
import React from 'react';
import classnames from 'classnames';
import './index.less';

export interface NoticeProps {}

export interface NoticeState {}

export default class Notice extends React.Component<NoticeProps, NoticeState> {
	static defaultProps = {};

	constructor(props: NoticeProps) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return <div className="notice-wrap"></div>;
	}
}
