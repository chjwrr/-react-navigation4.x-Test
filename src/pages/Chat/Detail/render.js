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
        <Text>聊天详情</Text>
        <TouchableOpacity onPress = {this.jumpToMy}>
          <Text>重置路由到我的页面</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.jumpToMyDetail}>
          <Text>重置路由到我的页面详情</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
