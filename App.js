import React from 'react';
import {
} from 'react-native';

import AppContainer from './src/navigator'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootRedux from './src/redux/reducers/rootReducer'
let rootStore = createStore(RootRedux, applyMiddleware(thunk, logger))

class App extends React.Component {
    render(){
      return <Provider store = {rootStore}>
        <AppContainer
          ref={nav => {
            this.appNavigator = nav;
          }}
          onNavigationStateChange={(prevState, newState, action)=>{
            // 每次由导航器管理的导航状态更改时都会调用的函数。它接收先前的状态，导航的新状态以及发出状态更改的动作
            // console.log('prevState=',prevState);
            // console.log('newState=',newState);
            // console.log('action=',action);
          }}/>
        </Provider>
    }
};

export default App;
