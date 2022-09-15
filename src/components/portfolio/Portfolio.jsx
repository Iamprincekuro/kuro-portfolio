import React from 'react'
import './portfolio.css'
import logo from '../../../src/assets/logo.jpg'
import a1 from '../../../src/assets/a1.jpg'
import a2 from '../../../src/assets/a2.jpg'


const Portfolio = () => {
  // an array of object to help map through each images using their id
  const data = [
    {
      id: 1,
      image: logo,
      title: 'This is a dummy project. It will be updated later.',
      github: 'https://github.com/iamprincekuro',
      demo: 'https://twitter.com/iamprincekuro',
    },
    {
      id: 2,
      image: a1,
      title: 'This is a dummy project. It will be updated later.',
      github: 'https://github.com/iamprincekuro',
      demo: 'https://pexels.com/photo/gray-and-white-robot-73910/',
    },
    {
      id: 3,
      image: a2,
      title: 'This is a dummy project. It will be updated later.',
      github: 'https://github.com/iamprincekuro',
      demo: 'https://pexels.com/photo/high-angle-photo-of-robot-2599244/',
    }
  ]
  return (
    <section id="portfolio">
      <h5>My projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Git Hub
                </a>
                <a href={demo} className="btn" target="_blank">
                  {' '}
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
