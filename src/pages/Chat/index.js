import React, { Component } from 'react';
import Render from './render'
import { StackActions, NavigationActions } from 'react-navigation';

class Chat extends Component<{}> {
  constructor(props){
    super(props);
    this.jumpToChatDetail = this.jumpToChatDetail.bind(this)
    this.jumpToMy = this.jumpToMy.bind(this)
  }

  jumpToChatDetail(){
    this.props.navigation.navigate('ChatDetail')
  }

  jumpToMy(){
    this.props.navigation.navigate('MyPage')
  }

  render() {
    return Render.render.call(this);
  }
}

export default Chat;
