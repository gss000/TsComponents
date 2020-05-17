import React, { Component, ReactNode, ChangeEvent, } from 'react';
import classnames from 'classnames';
import './index.less';

enum authType {

}

interface AuthCodeProps {
  type?: 4 | 6;

  className?: string;

  autoFocus?: boolean;
  
  btnTxt?: string;

  countSecond?: number;

  onChange?: (val:string) => {};

  onFocus?: () => {};
}

interface AuthCodeState {
  inputVal: string;

  emptyArr: string[];
}

class Button extends Component<AuthCodeProps, AuthCodeState> {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      emptyArr: [],
    };
  }

  static defaultProps = {
    type: 4,
    autoFocus: false,
    btnTxt: '确认'
  };

  inputRef: HTMLInputElement | null;

  componentDidMount() {
    const { type } = this.props;
    let { emptyArr } = this.state;
    emptyArr.length = Number(type);
    emptyArr.fill("");
    this.setState({ emptyArr });
  }

  change(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
  }

  focus(): void {}

  clear(): void {
    if (this.inputRef) {
      this.inputRef.value = '';
    }

    this.setState({
      inputVal: ''
    });
  }

  handleClick():void {}
  
  // 数字数组显示组
  renderNumGroup() {
    const { inputVal, emptyArr } = this.state;
    const { type } = this.props;
    let inputValArr = inputVal.split('');
    let enterArr = [...inputValArr, ...emptyArr];
    enterArr.length = Number(type);

    return (
      <div className="authCode-numGroup">
        {enterArr.map((item, index) => (
          <div
            className={
              inputValArr.length === index + 1
                ? `authCode-item authCode-item-${type} on`
                : `authCode-item authCode-item-${type}`
            }
          >
            {item}
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { type, autoFocus, className, btnTxt } = this.props;
    const cls = classnames('authCode-input', className);

    return (
      <div className="authCode">
        <input
          className={cls}
          type="tel"
          maxLength={type}
          ref={node => {
            this.inputRef = node;
          }}
          onChange={this.change.bind(this)}
          onFocus={this.focus.bind(this)}
          autoFocus={autoFocus}
        />
        {this.renderNumGroup()}
        <div className="authCode-btn" onClick={this.handleClick.bind(this)}>
          {btnTxt}
        </div>
      </div>
    );
  }
}

export default Button;
