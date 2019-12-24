import React, { Component } from 'react';
import Render from './render'
class Login extends Component<{}> {
  constructor(props){
    super(props);
    this.jumpToStart = this.jumpToStart.bind(this)
    this.jumpToHome = this.jumpToHome.bind(this)
  }

  jumpToStart(){
    this.props.navigation.navigate('StartRoute')
  }

  jumpToHome(){
    this.props.navigation.navigate('AppRoute')
  }

  render() {
    return Render.render.call(this);
  }
}

export default Login;
