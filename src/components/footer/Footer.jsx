import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs' // bs is the initials of what we are importing from the library
import { IoLogoTwitter } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Prince Kuro
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://linkedin.com/in/godspower-iffitis-313086112"
          target="blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/iamprincekuro" target="blank">
          <IoLogoTwitter />
        </a>
        <a href="https://instagram.com/iamprincekuro" target="blank">
          <FaInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Prince Kuro's concept 2022.</small>
      </div>
    </footer>
  )
}

export default Footer
