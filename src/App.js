 import React from 'react'
 import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./Compponet/Home"
import Contect from "./Compponet/Contect"
import Services from "./Compponet/Services"
import About from "./Compponet/About"
import NotExit from "./Compponet/NotExit"


import Navbar from "./Compponet/Navbar"
 const App = () => {
   return (
     <>
<BrowserRouter>
<Navbar/>
<Switch>
 <Route exact path='/' component={Home}/>
 <Route exact path='/Contect' component={Contect}/>
 <Route exact path='/Services' component={Services}/>
 <Route exact path='/About' component={About}/>
 <Route exact  component={NotExit}/>
 </Switch>

</BrowserRouter>
     </>
   )
 }
 
 export default App