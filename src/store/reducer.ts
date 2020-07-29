/*
 * @Author: ray_sun
 * @Date: 2020-07-28 22:43:57
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-07-29 10:14:15
 */
import { combineReducers } from 'redux-immutable'

import { reducer as loginReducer } from '../pages/login/store'
import { reducer as headerReducer } from '../components/header/store'

const reducer = combineReducers({
  login: loginReducer,
  header: headerReducer
})

export default reducer
