import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import './index.less'

interface IProps {}

type LoginProps = IProps & RouteComponentProps

interface IState {}

class Login extends Component<any, any> {
  public render(): any {
    return (
      <div className="P-login">
        <h1>Login page</h1>
        <p>login: myData = {this.props.myData}</p>
        <button
          onClick={() => {
            this.props.setData('123456')
          }}
        >
          更改login的myData
        </button>
        {/* <button onClick={this.getData}>Ajax请求</button> */}
        <button onClick={this.gotoHome.bind(this)}>跳转Home页</button>
      </div>
    )
  }
  private gotoHome() {
    this.props.history.push('/home')
  }
}

// 把store中的数据映射到组件的props
const mapStateToProps: any = (state: any) => ({
  myData: state.getIn(['login', 'myData'])
})

// 把store的Dispatch映射到组件的props
const mapDispatchToProps: any = (dispatch: any) => ({
  setData(data: any) {
    const action = actionCreators.setData(data)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
