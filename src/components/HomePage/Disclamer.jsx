import { FaAngleDoubleRight, FaLightbulb } from "react-icons/fa";

import "./Disclaimer.scss"

import React from 'react'

const Disclamer = () => {
  return (
    <div className="disclaimer">
        <div className="disclaimer__container">
        <div className="disclaimer__bulb">
            <FaLightbulb />
        </div>
        <div className="disclaimer__text">
            <p>This site is <span className="disclaimer__major">still on progress.</span>
            Maybe there are some typos or grammar error.</p>
        </div>
        </div>
        <div className="disclaimer__references">
            <h2>References</h2>
            <ul>
                <li><FaAngleDoubleRight className="angle__right" /><a href="#">W3Schools</a>: </li>
                <li><FaAngleDoubleRight className="angle__right" /><a href="#">Traversy Media</a></li>
                <li><FaAngleDoubleRight className="angle__right" /><a href="#">CloudTwo</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Disclamer