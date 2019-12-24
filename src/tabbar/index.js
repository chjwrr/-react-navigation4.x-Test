import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomePage from '../pages/Home'
import ChatPage from '../pages/Chat'
import FriendPage from '../pages/Friend'
import MyPage from '../pages/My'

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

        //obj.navigation.navigate('ChatPage')

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
  },
  FriendPage: {
    screen: FriendPage,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ()=>null,
      tabBarIcon: ({focused, tintColor}) => (<View style = {{backgroundColor: focused ? 'red' : 'green', flex: 1}}><Text>好友</Text></View>),
      tabBarOnPress:(obj)=>{
        console.log('friend tabbar press!',obj);
        obj.defaultHandler()
      },
    })
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '我的',
      tabBarIcon: ({focused, tintColor}) => (
        <Image />
      ),
      // tabBarOnPress:(obj)=>{
      //   console.log('my tabbar press!',obj);
      //   obj.defaultHandler()
      // },
      tabBarOnPress:async (obj)=>{
        console.log('my tabbar press!',obj);
        obj.defaultHandler()
      },
    })
  },
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
