import { React, useState } from 'react'
import { ToastContainer } from 'react-toast'
import './nav.css'
import logo from '../../assets/logo-png.png'
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const [bg, setBg] = useState(false)
  const changeBg = () => {
    if (window.scrollY >= 600) {
      setBg(true)
    } else {
      setBg(false)
    }
  }

  window.addEventListener('scroll', changeBg)

  return (
    <nav className={bg ? 'nav__bg' : ''}>
      <ToastContainer delay={5000} position={'top-center'} />
      <div className={toggle ? 'nav__container expanded' : 'nav__container'}>
        <a href="#">
          {' '}
          <img src={logo} alt="Kuro's logo" id="img__logo" />{' '}
        </a>
        <ul className="nav__links">
          <li onClick={() => setToggle(false)}>
            <a
              href="#"
              onClick={() => setActiveNav('#')}
              className={activeNav === '#' ? 'active' : ''}
            >
              {' '}
              Home
            </a>
          </li>
          <li onClick={() => setToggle(false)}>
            <a
              href="#about"
              onClick={() => setActiveNav('#about')}
              className={activeNav === '#about' ? 'active' : ''}
            >
              {' '}
              About
            </a>
          </li>
          <li onClick={() => setToggle(false)}>
            <a
              href="#skills"
              onClick={() => setActiveNav('#skills')}
              className={activeNav === '#skills' ? 'active' : ''}
            >
              {' '}
              Skills
            </a>
          </li>
          <li onClick={() => setToggle(false)}>
            <a
              href="#portfolio"
              onClick={() => setActiveNav('#portfolio')}
              className={activeNav === '#portfolio' ? 'active' : ''}
            >
              {' '}
              Portfolio
            </a>
          </li>
          <li onClick={() => setToggle(false)}>
            <a
              href="#contact"
              onClick={() => setActiveNav('#contact')}
              className={activeNav === '#contact' ? 'active' : ''}
            >
              {' '}
              Contact
            </a>
          </li>
        </ul>
        <div className="nav__toggle-btn" onClick={handleToggle}>
          {toggle ? (
            <Icon icon={x} size={28} />
          ) : (
            <Icon icon={menu} size={28} />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
