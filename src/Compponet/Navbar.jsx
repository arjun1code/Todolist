import React from 'react'
import {NavLink} from "react-router-dom"


const Navbar = () => {
    return (
        <>

                <div className='main'> 
                      <h1> ToDoList</h1>
                  <div className="two">
            <nav>
                <ul>
                    <li>
                        <NavLink  to="/" >Home</NavLink>  </li>
                    <li>
                        <NavLink to="/Contect">Contect</NavLink> </li>
                    <li>
                        <NavLink to="/Services">Services</NavLink></li>
                    <li>
                        <NavLink to="/About">About</NavLink>  </li>
                </ul>

            </nav>
                </div>
                </div>
        </>
    )
}

export default Navbar