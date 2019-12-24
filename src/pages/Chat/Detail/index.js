import React, { Component } from 'react';
import Render from './render'
class Home extends Component<{}> {
  constructor(props){
    super(props);
    this.jumpToMy = this.jumpToMy.bind(this)
    this.jumpToMyDetail = this.jumpToMyDetail.bind(this)
  }

  jumpToMy(){

  }
  
  jumpToMyDetail(){

  }

  render() {
    return Render.render.call(this);
  }
}

export default Home;
