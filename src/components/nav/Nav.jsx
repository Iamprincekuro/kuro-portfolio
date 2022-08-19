import { React, useState } from 'react'
import './nav.css'
// import { AiOutlineHome } from 'react-icons/ai'
// import { AiOutlineUser } from 'react-icons/ai'
// import { BiBook } from 'react-icons/bi'
// import { MdComputer } from 'react-icons/md'
// import { BiMessageSquareDetail } from 'react-icons/bi'
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
  if(window.scrollY >=80) {
    setBg(true)
  }
  else {
    setBg(false)
  }
}

window.addEventListener('scroll', changeBg)

  return (
    <nav className = {bg ? 'nav__bg' : ''}>
      <div className={toggle ? 'nav__container expanded' : 'nav__container'}>
        <a href="#">
          {' '}
          <img src={logo} alt="Kuro's logo" id="img__logo" />{' '}
        </a>
        <ul className="nav__links">
          <li>
            <a
              href="#"
              onClick={() => setActiveNav('#')}
              className={activeNav === '#' ? 'active' : ''}
            >
              {' '}
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActiveNav('#about')}
              className={activeNav === '#about' ? 'active' : ''}
            >
              {' '}
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setActiveNav('#skills')}
              className={activeNav === '#skills' ? 'active' : ''}
            >
              {' '}
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => setActiveNav('#portfolio')}
              className={activeNav === '#portfolio' ? 'active' : ''}
            >
              {' '}
              Portfolio
            </a>
          </li>
          <li>
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
