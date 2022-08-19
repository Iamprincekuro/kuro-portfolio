import React from 'react'

import { TbDeviceMobileMessage } from 'react-icons/tb'



const CTA = () => {
  
  return (
    <a href="#contact" className="contact__btn header__btn">
      <TbDeviceMobileMessage className="i" />
      <p>Let's talk</p>
    </a>
  )
}

export default CTA
