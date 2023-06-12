import React, { Component } from 'react'

export default class About extends Component {
  state={
    employees:[]
  }
  componentDidMount(){
    fetch("https://reqres.in/api/users?page=2")
    .then((res)=>{
      console.log(res)
      return res.json()
    })
    .then((update)=>{
      console.log(update.data)
      this.setState({
        employees:update.data
      })
    })
  }
  render() {
    return (
      <div>
        {
          this.state.employees.map((employee)=>(
            <div>
              <p>Name:-{employee.first_name}</p>
              <p>Email:-{employee.email}</p>
              <img src={employee.avatar} />
            </div>
          ))
        }
      </div>
    )
  }
}
