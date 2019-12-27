import * as ActionTypes from '../actionTypes'
export const HomeAction = (value)=>{
  return {
    type: ActionTypes.homeTestActionOne,
    params: value
  }
}

export const HomeThunkAction = (value)=>{
  return (dispatch,getState)=>{
    fetch('https://www.baidu.com').then((res)=>{
      dispatch(HomeAction('网络请求到的值'))
    })
  }
}
