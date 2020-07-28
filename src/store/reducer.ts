/*
 * @Author: ray_sun
 * @Date: 2020-07-28 22:43:57
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-07-28 23:46:52
 */
import * as constants from './constants'

// 初始默认的state
const defaultState = {
  myData: null
}

export default (state = defaultState, action: any) => {
  // 由于state是引用型，不能直接修改，否则是监测不到state发生变化的。因此需要先复制一份进行修改，然后再返回新的state。
  let newState = Object.assign({}, state)
  switch (action.type) {
    case constants.SET_DATA:
      newState.myData = action.data
      return newState
    default:
      return state
  }
}
