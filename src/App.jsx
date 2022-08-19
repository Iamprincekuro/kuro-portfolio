import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import CTA from './components/header/CTA'

const App = () => {
  return (
    <div>
      <>
        <Nav />
        <Header />
        {/* <CTA /> */}
        <About />
        {/* <Skills /> */}
        {/* <Portfolio /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </>
    </div>
  )
}

export default App
