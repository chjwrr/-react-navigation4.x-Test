import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Style from './style'

export default {
  render() {
    return (
      <View style = {Style.container}>
        <Text>详情</Text>
        <TouchableOpacity onPress = {this.jumpToFriend}>
          <Text>重置路由到好友页面</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.jumpToFriendDetail}>
          <Text>重置路由到好友页面详情</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
