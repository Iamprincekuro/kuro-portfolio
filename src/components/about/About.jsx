import React from 'react'
import './about.css'
import dp1 from '../../assets/dp1.jpg'
// import { FaAward } from 'react-icons/fa'
// import { FiUsers } from 'react-icons/fi'
// import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Know about</h5>
      <h2 className="about__title">Prince Kuro</h2>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__image">
            {/* <div className="about__image-bg"></div> */}
            <div className="about__image-lg">
              <img src={dp1} alt="about image" />
            </div>
            {/* <div className="about__image-sm">
              <img src={dp1} alt="about image" />
            </div> */}
          </div>
        </div>
        <div className="about__right">
          <p>
            Prince Kuro, born Iffitis Prince Godspower is a frontend developer
            experienced in project management, content creation and copywriting.
            Prince Kuro pays attention to details, possesses great communication
            and problem-solving skills. Studied Management and Computer Studies
            at the university of Cape Coast, Ghana.{' '}
          </p>
          <p>
            Fun fact: Prince is also called the Supreme Strategist based on his
            endless ideas for problem-solving, which gives him an edge in every
            organization he finds himself thus providing solutions to contribute
            to the growth of the organization.{' '}
          </p>

          <p>
            Prince Kuro is continually learning to advance his tech career.
            Prince Kuro likes listening to music, plays football for fun,
            available for travels and open to learning new things.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
