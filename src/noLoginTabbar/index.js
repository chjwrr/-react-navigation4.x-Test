import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomePage from '../pages/Home'
import ChatPage from '../pages/Chat'

const RouteConfigs = {
  HomePage: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => (
        <Image />
      ),
      tabBarOnPress:(obj)=>{
        console.log('chat tabbar press!',obj);
        obj.defaultHandler()
      },
    })
  },
  ChatPage: {
    screen: ChatPage,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '聊天',
      tabBarIcon: ({focused, tintColor}) => (
        <Image />
      ),
      tabBarOnPress:(obj)=>{
        console.log('chat tabbar press!',obj);
        obj.defaultHandler()
      },
    })
  }
}


const TabNavigatorConfig = {
  initialRouteName: 'HomePage',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  lazy: true,
  // tabBarComponent: props => (<CustomTabbarComponent />)
}


const TabNavigator = createBottomTabNavigator(
  RouteConfigs,
  TabNavigatorConfig
)


export default TabNavigator
