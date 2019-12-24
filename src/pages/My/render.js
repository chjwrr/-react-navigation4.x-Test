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
        <Text>我的</Text>
        <TouchableOpacity onPress = {this.jumpToMyDetail}>
          <Text>跳转到详情页</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.jumpToHome}>
          <Text>重置路由到首页</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
