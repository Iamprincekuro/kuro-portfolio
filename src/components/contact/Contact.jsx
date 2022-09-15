import React, { useRef } from 'react'
import { toast } from 'react-toast'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'
//importing email js from the installed emailjs-com package
import emailjs from 'emailjs-com'
import './contact.css'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_iyrwsms',
        'template_sj7i1no',
        form.current,
        '67v84jmW4GVmVCvtx'
      )
      .then(
        function (response) {
          e.target.reset()
          toast.success("Thank you for your message, I will respond shortly!");
        },
        function (err) {
          toast.error("Your message didn't deliver. Kindly retry!");
        }
      )
  }
  const user = {
    name: '',
    email: '',
  }

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineAlternateEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tellyprinceswag@gmail.com</h5>
            <a href="mailto:tellyprinceswag@gmail.com" target="_blank">
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>iamprincekuro</h5>
            <a href="https://instagram.com/iamprincekuro" target="_blank">
              Follow me on IG
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2347080583634</h5>
            <a
              href="https://api.whatsapp.com/send?phone=2347080583634"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Pls, enter your full name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Pls, enter your email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter your message..."
            required
          ></textarea>
          <button type="submit" className="btn">
            Submit message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
