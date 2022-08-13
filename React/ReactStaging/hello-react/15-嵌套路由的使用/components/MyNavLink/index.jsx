import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      // activeClassName='found'自定义的激活样式
      <NavLink activeClassName='found' className="list-group-item" {...this.props}></NavLink>
    )
  }
}
