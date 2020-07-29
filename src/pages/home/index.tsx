import React, { Component } from 'react'
import FilterableProductTable from '../../components/nameForm'
import './index.less'

class Home extends Component {
  render() {
    return (
      <div className="P-home">
        <FilterableProductTable />
        <h1>Home page</h1>
      </div>
    )
  }
}

export default Home
