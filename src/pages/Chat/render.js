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
        <Text>聊天</Text>
        <TouchableOpacity onPress = {this.jumpToChatDetail}>
          <Text>跳转到详情页</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.jumpToMy}>
          <Text>重置路由到我的</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
