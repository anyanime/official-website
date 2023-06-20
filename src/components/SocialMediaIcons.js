import React from 'react'
import {FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare} from 'react-icons/fa';
import './SocialMediaIcons.css'



const SocilMediaIcons = props => {
  return (
    <div {...props} className='social-icons'>
      <a href='https://github.com/anyanime' target='_blank' rel='noreferrer'>
        <FaGithubSquare />
      </a>
      <a href='https://web.facebook.com/anyanimebenson' target='_blank' rel='noreferrer'>
        <FaFacebookSquare />
      </a>
      <a href='https://linkedin.com/in/bensonanyanime' target='_blank' rel='noreferrer'>
        <FaLinkedinIn />
      </a>
      <a href='https://instagram.com/bensonanyanime' target='_blank' rel='noreferrer'>
        <FaInstagramSquare />
      </a>
      <a href='https://twitter.com/bensonanyanime' target='_blank' rel='noreferrer'>
        <FaTwitterSquare />
      </a>

    </div>
  )
}

export default SocilMediaIcons
