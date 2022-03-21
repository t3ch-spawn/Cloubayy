
import React, { useState } from 'react'
import Icons from './Icons'
import Navbar from './Navbar'
import "./Homepage.scss"



const Homepage = () => {
  const [shownav, setShownav] = useState(false)
  const showNav = () => {
    setShownav(!shownav)
  }
  return (
      <>
      <section>
    <div className={shownav ? 'show-nav homepage' : 'homepage'}>
        <Navbar shownav={shownav} setShownav={setShownav} />
        <Icons showNav={showNav} />
    </div>
    </section>
    
    </>
  )
}

export default Homepage