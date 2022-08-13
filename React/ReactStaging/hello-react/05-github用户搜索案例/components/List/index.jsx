import React, { Component } from 'react'

export default class List extends Component {



  render() {
    const {users,isFirst,isLoading,err}=this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用</h2> :
          isLoading ? <h2>Loading...</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((usersObj)=>{
            return (
              <div key={usersObj.id} className="card">
                  <a rel="noreferrer" href={usersObj.html_url} target="_blank">
                    <img alt='pop' src={usersObj.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">{usersObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
