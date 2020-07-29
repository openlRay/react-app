/*
 * @Author: ray_sun
 * @Date: 2020-07-29 10:55:02
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-07-29 11:01:22
 */
const proxy = require('http-proxy-middleware')

module.exports = function (app: any) {
  app.use(
    '^/api',
    proxy({
      target: 'http://localhost',
      changeOrigin: true
    })
  )
}
