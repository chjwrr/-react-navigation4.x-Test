import * as ActionTypes from '../actionTypes'

const initState = {
  homeText: '默认值'
}
export default homeReducer = (state = initState, action)=>{
  switch(action.type){
    case ActionTypes.homeTestActionOne:
      return {...state, homeText: action.params}
      break

    default:
      return state
      break
    }
}
