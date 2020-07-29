/*
 * @Author: ray_sun
 * @Date: 2020-07-28 22:43:34
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-07-29 10:12:29
 */
import * as constants from './constants'

export const setData = (data: any) => ({
  type: constants.SET_DATA,
  data
})
