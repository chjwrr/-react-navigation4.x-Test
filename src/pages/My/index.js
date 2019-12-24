import React, { Component } from 'react';
import Render from './render'
class My extends Component<{}> {
  constructor(props){
    super(props);
    this.jumpToMyDetail = this.jumpToMyDetail.bind(this)
    this.jumpToHome = this.jumpToHome.bind(this)
  }

  jumpToMyDetail(){
    this.props.navigation.navigate('MyDetail')
  }

  jumpToHome(){
    this.props.navigation.navigate('HomePage')
  }

  render() {
    return Render.render.call(this);
  }
}

export default My;
