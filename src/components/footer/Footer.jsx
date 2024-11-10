import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiIndeed } from "react-icons/si"
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">DJ Naval</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__copyright">
        <small>For other information just tap my social media accounts below.</small>
      </div>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/daniel-jacob-naval-258500292" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/djacob0" target="_blank" rel="noreferrer" ><FaGithub /></a>
        <a href="https://www.facebook.com/djaayyn0" target="_blank" rel="noreferrer" ><FaFacebook /></a>
        <a href="https://www.instagram.com/djaynaval/?locale=fr_FR&hl=ar" target="_blank" rel="noreferrer" ><FaInstagram /></a>
        <a href="https://twitter.com/deejayynaval" target="_blank" rel="noreferrer" ><FaTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>Thank you for viewing my personal portfolio.</small>
      </div>
    </footer>
  )
}

export default Footer