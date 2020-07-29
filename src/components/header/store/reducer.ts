/*
 * @Author: ray_sun
 * @Date: 2020-07-28 22:43:57
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-07-29 10:11:57
 */
import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  myData: null
})

const setData = (state: any, action: any) => {
  return state.set('myData', action.data)
}

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case constants.SET_DATA:
      return setData(state, action)
    default:
      return state
  }
}
