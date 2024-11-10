import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';
import Skill from './components/skill/skill';


const App = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Intro />
      <Experience />
      <Skill/>
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
