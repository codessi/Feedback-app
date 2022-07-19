import React from 'react'
import { FaQuestion } from "react-icons/fa"
import { Link } from 'react-router-dom'

const AboutIconLink = () => {
// replace string on to=
  // object pathname = '/about'
  

  return (
    <div className='about-link'>
      <Link to="/about">
        <FaQuestion size={30}/>
      </Link>
    </div>
  )
}

export default AboutIconLink