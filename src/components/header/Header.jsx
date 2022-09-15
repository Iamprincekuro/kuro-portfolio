import React from 'react'
import './header.css'
import dp1 from '../../assets/dp1.jpg'
import { TbDeviceMobileMessage } from 'react-icons/tb'
import Typed from 'react-typed'

const Header = () => {
  return (
    <section id="header">
      <header>
        <div className="container header__container">
          <div className="right__div">
            <h1>yes, you found Prince Kuro.</h1>
            <p>
              I'm a {' '}
              <Typed
                strings={[
                  'Frontend developer...',
                  'Content creator...',
                  'Copywriter.',
                ]}
                typeSpeed={50}
                backSpeed={20}
                loop
              />
            </p>
            <a href="#contact" className="contact__btn header__btn">
              <TbDeviceMobileMessage className="i" />
              <p>Let's talk</p>
            </a>
          </div>

          <div className="left__div">
            <div className="header__image-bg"></div>
            <div className="header__image-bg1"></div>
            <div className="header__image-lg">
              <img src={dp1} alt="Header pic" />
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Header
