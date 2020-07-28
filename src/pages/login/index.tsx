import React, { Component } from 'react'
import { RouteComponentProps } from "react-router-dom"
import './index.less'

interface IProps {}

type LoginProps = IProps & RouteComponentProps

interface IState {}

class Login extends Component<LoginProps, IState> {
    public render(): any {
        return (
            <div className="P-login">
                <h1>Login page</h1>
                <button onClick={this.gotoHome.bind(this)}>跳转Home页</button>
            </div>
        )
    }
    private gotoHome() {
      this.props.history.push('/home')
    }
}

export default Login