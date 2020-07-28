/*
 * @Author: ray_sun
 * @Date: 2020-07-28 23:29:26
 * @LastEditors: ray_sun
 * @LastEditTime: 2020-07-28 23:36:25
 */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy
} = require('customize-cra')

process.env.GENERATE_SOURCEMAP = 'false'

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader()
)
