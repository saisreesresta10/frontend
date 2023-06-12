import React,{useState} from 'react'
import axios from 'axios'
export default function Home() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    function save(e){
        setUsername(e.target.value)
    }
    function show(){
        console.log(username,password)
        axios.post("https://demo-9abj.onrender.com/add",{name:username,passcode:password})
          .then((res)=>{
            console.log(res)
          })
        setUsername("")
        setPassword("")
    }
  return (
    <div>
      <br/><p><input placeholder='Enter name' onChange={save}/></p>
      <p><input placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/></p>
      <button onClick={show}>Submit</button>
    </div>
  )
}
