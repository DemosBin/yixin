import React from 'react'
import { hashHistory } from 'react-router'
import StartPage from './StartPage.jsx'
import Index from './Index.jsx'

//let t = null
export default class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      showStartPage: true
    };
  }
  componentDidMount() {
    var _this = this
    setTimeout(()=>{
      _this.setState({
        showStartPage: false
      })
    }, 2000);
  }
  onSkip = () => {
    this.setState({
      showStartPage: false
    })
  }
  render() {
    const {showStartPage} = this.state
    return (
      !showStartPage 
      ? <Index />
      : <StartPage onSkip={this.onSkip}/>
    );
  }
}
