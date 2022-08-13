import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {

  back=()=>{
    this.props.history.goBack()
  }
  forword=()=>{
    this.props.history.goForward();
  }
  go=()=>{
    this.props.history.go(2);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
            <button onClick={this.back}>回退</button>&nbsp;
            <button onClick={this.forword}>前进</button>&nbsp;
            <button onClick={this.go}>GO</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
