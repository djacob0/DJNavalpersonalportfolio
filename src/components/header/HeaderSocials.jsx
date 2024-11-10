import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/daniel-jacob-naval-258500292/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/djacob0" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.facebook.com/djaayyn0" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      <a href="https://www.instagram.com/djaynaval/?locale=fr_FR&hl=ar" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      <a href="https://twitter.com/deejayynaval" target="_blank" rel="noreferrer" ><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials