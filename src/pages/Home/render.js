import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Style from './style'

import ColorView from './customComponent/ColorView'
import Button from '../../conponents/customButton'

export default {
  render() {
    return (
      <View style = {Style.container}>
        <Text>主页</Text>

        <Button onPress = {this.jumpToLogin} text = {'模拟登录失效，跳转到登录页面'} />

        <Button onPress = {this.jumpToStart} text = {'模拟跳转到启动页(用于广告等页面)'} />

        <Button onPress = {this.jumpToTabbar} text = {'切换到登录后的tabbar'} />

        <Button onPress = {this.jumpToNoLoginTabbar} text = {'切换到没有登录的tabbar'} />

        <Button onPress = {this.jumpToMy} text = {'重置路由到我的'} />

        <Button onPress = {this.jumpToHomeDetail} text = {'跳转到首页详情页'} />

        <ColorView />
      </View>
    )
  }
}
