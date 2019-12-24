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
        <Text>我的详情</Text>
        <TouchableOpacity onPress = {this.jumpToHome}>
          <Text>重置路由到首页</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.jumpToHomeDetail}>
          <Text>重置路由到首页详情</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
