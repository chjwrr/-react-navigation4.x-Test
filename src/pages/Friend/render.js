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
        <Text>好友</Text>
        <TouchableOpacity onPress = {this.jumpToFriendDetail}>
          <Text>跳转到详情页</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.jumpToChat}>
          <Text>重置路由到聊天</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
