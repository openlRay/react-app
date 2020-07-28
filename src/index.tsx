import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import './common/style/frame.less'

const Apps = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(Apps, document.getElementById('root'))
