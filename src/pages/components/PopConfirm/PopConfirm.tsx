import React, { Component } from 'react';
import './PopConfirm.less';

export interface PopConfirmProps {}

interface PopConfirmState {}

export default class PopConfirm extends Component<PopConfirmProps, PopConfirmState> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return <div className="PopConfirmWrap"></div>;
	}
}
