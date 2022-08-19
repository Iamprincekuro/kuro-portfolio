import React from 'react'
import CTA from './CTA'
import './header.css'
import dp1 from '../../assets/dp1.jpg'
import HeaderSocials from './HeaderSocials'
import cv from '../../assets/cv.pdf'

const Header = () => {
  return (
    <section id="header">
    <header>
      <div className="container header__container">
        <div className="left__div">
          <div className="header__image-bg"></div>
          <div className="header__image-lg">
            <img src={dp1} alt="Header image" />
          </div>
          <div className="header__image-sm">
            <img src={dp1} alt="Header image" />
          </div>
        </div>

        <div className="right__div">
          {/* <h4>Yes, you found me!</h4> */}
          <h1>yes, you found Prince Kuro.</h1>
          <HeaderSocials />
          <p>
            Frontend developer, content creator and a copywriter with great
            problem-solving skills.
          </p>
            <a href={cv} download className="btn">
              Download CV
            </a>
          <a href="#contact" className="header__btn-md">
            Let's talk
          </a>
        </div>
      </div>
      {/* <h5>Welcome, friend!</h5>
        <h1>Prince Kuro.</h1>
        <h5 className="text-light">Frontend developer</h5> */}
      {/* <CTA />
        <HeaderSocials /> */}
        {/* <CTA /> */}
    </header>
    </section>
  )
}

export default Header
