import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Styles from './style'

export default {
  render() {
    return (
      <View style = {Styles.container}>
        <Text>启动页（用于广告等页面）</Text>
        <TouchableOpacity onPress = {this.jumpToLogin}>
          <Text>登录失效，跳转到登录页面</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.jumpToHome}>
          <Text>开启APP</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
