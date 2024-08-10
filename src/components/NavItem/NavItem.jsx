import './NavItems.css'
import React from 'react'
import { motion } from "framer-motion";


const NavItem = (props) => {
  return (
    <motion.div className=".nav-item"
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="nav-item">
        {props.children}
    </div>
    </motion.div>
  )
}

export default NavItem

