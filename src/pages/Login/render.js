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
        <Text>登录</Text>
        <TouchableOpacity onPress = {this.jumpToStart}>
          <Text>跳转到启动页(用于广告等页面)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.jumpToHome}>
          <Text>开启APP</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
