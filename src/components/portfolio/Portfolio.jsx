import React from 'react';
import IMG1 from '../../assets/signup.jpg';
import IMG2 from "../../assets/test00.jpg";
import IMG3 from "../../assets/guitar2.jpg"


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'DJ Expense Tracker',
      img: IMG1,
      des:"An expense tracker to manage expenses with ease without hesitation.",
      type:"A budget tracker Web App.",
      team:"Side project during college days.",
      teckStack:"React | NodeJs | ExpressJs | Javascript",
      github: 'https://github.com/djacob0/DJexpensetracker',
    },
    {
      id: 2,
      title: 'DJ Custom Guitar Shop',
      img: IMG3,
      des:"A e-commerce guitar shop inspired by RJ Guitars in Philippines.",
      type:"A Guitar Shop Web App",
      team:"Side project during weekends.",
      teckStack:"HTML | React | Redux | Babel",
      github: 'https://github.com/djacob0/DJcustomguitar',
    },
    {
      id: 3,
      title: 'DJ First personal portfolio',
      des:"First personal portfolio for employment purposes and learnings.",
      img: IMG2,
      teckStack:"HTML | CSS | JavaScript | React | Jest",
      github: 'https://github.com/djacob0/DJnavalportfolio',
    }
    
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <h3 className='portfolio__title'>{pro.title}</h3>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          
            <p>{pro.des}</p>
            <p>{pro?.type}</p>
            <p>{pro.team}</p>
        
            <p>{pro.teckStack}</p>
          
          <div className="portfolio__item-cta">
            <a href={pro.github} target="_blank" className="btn">GitHub</a>
          </div>
          
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio