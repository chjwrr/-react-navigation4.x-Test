import React, { Component } from 'react';
import Render from './render'
class Home extends Component<{}> {
  constructor(props){
    super(props);
    this.jumpToHome = this.jumpToHome.bind(this)
    this.jumpToHomeDetail = this.jumpToHomeDetail.bind(this)
  }

  jumpToHome(){

  }
  
  jumpToHomeDetail(){

  }

  render() {
    return Render.render.call(this);
  }
}

export default Home;
