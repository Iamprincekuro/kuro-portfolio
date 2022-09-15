import React from 'react'
import './about.css'
import dp1 from '../../assets/abt3.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Know about</h5>
      <h2 className="about__title">Prince Kuro</h2>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__image-lg">
            <img src={dp1} alt="about pic" />
          </div>
        </div>
        <div className="about__right">
          <p>
            Prince Kuro, born Iffitis Prince Godspower is a frontend developer
            experienced in JavaScript, React, HTML and CSS. Prince Kuro pays
            attention to details, possesses great communication and
            problem-solving skills. Studied Management and Computer Studies at
            the university of Cape Coast, Ghana.{' '}
          </p>
          <p>
            Fun fact: Prince is also called the Supreme Strategist based on his
            endless ideas for problem-solving, which gives him an edge in every
            organization he finds himself thus providing solutions to contribute
            to the growth of the organization.{' '}
          </p>

          <p>
            Prince Kuro is continually learning to advance his tech career. He
            likes listening to music, plays football for fun, available for
            travels and open to learning new things.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
