

import React from 'react'
import { motion } from "framer-motion"
import "./Owner.scss"

const Owners = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <div className='owner'>
        <motion.h3 whileHover={{textShadow: "0px 0px 8px #2f3723",}} ><a href="#">Edit this page on GitHub</a></motion.h3>
        <p>
            c2t {year} &copy; <span className='name'>Godwin Alugbin</span>
        </p>
        <p>
            If there are some contents which are outdated or need to be updated, feel free to email me <a href="#" style={{color: 'white'}}>here</a>
        </p>
    </div>
  )
}

export default Owners