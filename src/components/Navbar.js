import React from 'react'
import logo from "../images/Troll Face.png"
import { NavLink} from 'react-router-dom'

const Navbar = ()=>{
   
    return(
       <nav className='navbar'>
           <img src={logo}/>
           <h1>Meme Generator</h1>
           <div className='btns'>
           <NavLink to='/'> <button className='btn3'>Home</button></NavLink>
           <NavLink to='/formpage'> <button className='btn1'>form page</button></NavLink>
           <NavLink to='/windowsize'> <button className='btn2'>window size</button></NavLink>
           </div>
           <h4>React Course - Project 3</h4>
           
       </nav>
    )
}

export default Navbar