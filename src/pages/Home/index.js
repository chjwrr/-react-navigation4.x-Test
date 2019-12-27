import React, { Component } from 'react';
import Render from './render'
import { connect } from 'react-redux'
import { SwitchActions, StackActions,  NavigationActions } from 'react-navigation';
import * as Actions from '../../redux/actions'


class Home extends Component<{}> {
  constructor(props){
    super(props);
    this.jumpToLogin = this.jumpToLogin.bind(this)
    this.jumpToStart = this.jumpToStart.bind(this)
    this.jumpToHomeDetail = this.jumpToHomeDetail.bind(this)
    this.jumpToMy = this.jumpToMy.bind(this)
    this.jumpToTabbar = this.jumpToTabbar.bind(this)
    this.jumpToNoLoginTabbar = this.jumpToNoLoginTabbar.bind(this)
    this.changeReducerValue = this.changeReducerValue.bind(this)
    this.changeReducerNetValue = this.changeReducerNetValue.bind(this)
    this.reduceValue = 0
  }

  // 切换根路由->登录路由树
  jumpToLogin(){
    this.props.navigation.navigate('LoginRoute')
    // this.props.navigation.dispatch(SwitchActions.jumpTo({ routeName: 'LoginRoute' }));
  }

  // 切换根路由->广告路由树
  jumpToStart(){
    this.props.navigation.navigate('StartRoute')
    // this.props.navigation.dispatch(SwitchActions.jumpTo({ routeName: 'StartRoute' }));
  }

  // 首页详情
  jumpToHomeDetail(){
    this.props.navigation.navigate('HomeDetail')
  }

  // 切换tabbar->我的
  jumpToMy(){
    console.log('this.props.navigation=',this.props.navigation);
    this.props.navigation.navigate('MyPage')
  }

  // 切换tabbar->登录后的tabbar
  jumpToTabbar(){
    this.props.navigation.navigate('AppRoute')
    // this.props.navigation.dispatch(SwitchActions.jumpTo({ routeName: 'AppRoute' }));
  }

  // 切换tabbar->没有登录的tabbar
  jumpToNoLoginTabbar(){
    this.props.navigation.navigate('NoLoginAppRoute')
    // this.props.navigation.dispatch(SwitchActions.jumpTo({ routeName: 'NoLoginAppRoute' }));
  }

  // 修改reducer中的值
  changeReducerValue(){
    this.props.changeReducerValue(this.reduceValue)
    this.reduceValue += 1
  }

  changeReducerNetValue(){
    this.props.changeReducerNetValue()
  }


  componentDidMount() {
    this.props.navigation.setParams({ nextValue: 'abc' }); // 此处设置

    // 页面将获取焦点
    this.willFocus = this.props.navigation.addListener('willFocus',payload => {});
    // 页面已获取到焦点
    this.didFocus = this.props.navigation.addListener('didFocus',payload => {});
    // 页面将失去焦点
    this.willBlur = this.props.navigation.addListener('willBlur',payload => {});
    // 页面已失去到焦点
    this.didBlur = this.props.navigation.addListener('didBlur',payload => {});





  }

  componentWillUnmount() {
    this.willFocus && this.willFocus.remove();
    this.didFocus && this.didFocus.remove();
    this.willBlur && this.willBlur.remove();
    this.didBlur && this.didBlur.remove();
  }

  render() {
    return Render.render.call(this);
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    homeText: state.homeReducer.homeText
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeReducerValue:(value)=>{
      dispatch(Actions.HomeAction(value))
    },
    changeReducerNetValue:()=>{
      dispatch(Actions.HomeThunkAction())
    }
  }
}
export default connect( mapStateToProps, mapDispatchToProps )(Home)
