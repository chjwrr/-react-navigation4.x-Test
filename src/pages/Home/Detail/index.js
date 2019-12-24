import React, { Component } from 'react';
import Render from './render'
class Home extends Component<{}> {
  constructor(props){
    super(props);
    this.jumpToFriend = this.jumpToFriend.bind(this)
    this.jumpToFriendDetail = this.jumpToFriendDetail.bind(this)
  }

  jumpToFriend(){

  }

  jumpToFriendDetail(){

  }

  render() {
    return Render.render.call(this);
  }
}

export default Home;
