import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hi! I'm</h5>
        <h1>Daniel Jacob Naval</h1>
        <h5 className="text-light">Full-Stack Developer and Aspiring Guitarist</h5>
        <CTA />
        <a href="#contact" className="scroll__down"></a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header