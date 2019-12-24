import React, { Component } from 'react';
import Render from './render'
class Stary extends Component<{}> {
  constructor(props){
    super(props);
    this.jumpToLogin = this.jumpToLogin.bind(this)
    this.jumpToHome = this.jumpToHome.bind(this)
  }

  jumpToLogin(){
    this.props.navigation.navigate('LoginRoute')
  }

  jumpToHome(){
    this.props.navigation.navigate('AppRoute')
  }

  render() {
    return Render.render.call(this);
  }
}

export default Stary;
