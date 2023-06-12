import React from "react"
class Demo extends React.Component{
    state={
        expert:"reactjs",
    }
    display=()=>{
      this.setState({
        expert:"Angular",
      })
    }
    render(){
        return(
            <div>
               {/* <h1>{this.state.name}</h1> */}
               <p>Name: {this.props.name}</p>
               <p>Company: {this.props.company}</p>
               <p>Knowledge: {this.state.expert}</p>
               <button onClick={this.display}>Click</button>
            </div>
        )
    }
}
export default Demo