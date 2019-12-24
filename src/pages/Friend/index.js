import React, { Component } from 'react';
import Render from './render'
class Friend extends Component<{}> {
  constructor(props){
    super(props);
    this.jumpToFriendDetail = this.jumpToFriendDetail.bind(this)
    this.jumpToChat = this.jumpToChat.bind(this)
  }

  jumpToFriendDetail(){
    this.props.navigation.navigate('FriendDetail')
  }

  jumpToChat(){
    this.props.navigation.navigate('ChatPage')

  }

  render() {
    return Render.render.call(this);
  }
}

export default Friend;
