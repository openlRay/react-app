import React, { Component } from 'react'
import './index.less'

interface IProps {
  name: string
}
interface IState {
  date: any
  numbers: any
}

const scaleNames: any = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class Header extends Component<any, any, any> {
  constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e: any) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    console.log(this.props)
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default Header
