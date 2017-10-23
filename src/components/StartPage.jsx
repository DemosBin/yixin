import React from 'react';
import { NavBar, Drawer } from 'antd-mobile';

export default class StartPage extends React.Component {
  constructor(props){
    super(props)
  }

  onSkip = () => {
    this.props.onSkip();
  }
  render() {
    console.log(this.props)
    return (
      <div className="start-page">
        <img className="start-page" src="/img/timg.jpg" alt=""/>
        <div className="skip" onClick={this.onSkip}>跳过</div>
      </div>
    );
  }
}
