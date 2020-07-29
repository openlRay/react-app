import React, { Component } from 'react'
import TemperatureInput from '../header'

const data: any = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
]

class SearchBar extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleInput(e: any) {
    this.props.onHandleInput(e)
  }
  handleCheckbox(e: any) {
    this.props.onHandleCheckbox(e)
  }
  render() {
    const { filterText, inStockOnly } = this.props

    return (
      <div>
        <input type="text" value={filterText} onChange={this.handleInput} />
        <input type="checkbox" value={inStockOnly} onChange={this.handleCheckbox} />
      </div>
    )
  }
}

class FilterableProductTable extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { filterText: '', inStockOnly: false }
    this.handleInput = this.handleInput.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleInput(e: any) {
    this.setState({
      filterText: e.target.value
    })
  }
  handleCheckbox(e: any) {
    this.setState({
      inStockOnly: e.target.value
    })
  }
  render() {
    const { filterText, inStockOnly } = this.state

    return (
      <div>
        <SearchBar filterText={filterText} inStockOnly={inStockOnly} onHandleInput={this.handleInput} onHandleCheckbox={this.handleCheckbox} />
      </div>
    )
  }
}

export default FilterableProductTable
