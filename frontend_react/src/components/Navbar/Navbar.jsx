import React from 'react'
import './Navbar.scss'
import { useState } from 'react'
import {images} from "../../constants"
import {easeOut, motion} from "framer-motion"
import {HiMenuAlt4,HiX} from "react-icons/hi"
const Navbar = () => {

  const [Toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>

    <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home','about','work','skills','contacts'].map((item)=>(
          <li className='app__flex p-text' key={`link-${item}`}>
            <div></div>
             <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={()=>{setToggle(true)}}/>
        {Toggle && (
          <motion.div
           whileInView={{x:[300,0]}}
           transition={{duration:0.85,ease:'easeOut'}}
           >
          <HiX onClick={()=>{setToggle(false)}}/>
          <ul>
          {['home','about','work','skills','contacts'].map((item)=>(
          <li key={item}>
             <a href={`#${item}`}>{item}</a>
          </li>

        ))}          </ul>
          </motion.div>
        )

        }

      </div>
    </nav>
  )
}

export default Navbar