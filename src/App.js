import React from "react"
//import Demo from './Demo';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
class App extends React.Component{
  state={
    companyName:"Codegnan",
    year:2008
  }
  render(){
    return(
      <section>
        <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </BrowserRouter>
        {/* <h1>Good Afternoon</h1>
         <p>{this.state.companyName} {this.state.year}</p>
         <Demo name="sresta" company="codegnan"/>
         <Demo name="sindhura" company="amazon"/> */}
      </section>
      
    )
  }
}
export default App