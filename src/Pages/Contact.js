import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="contact">
            <form className="contact-left">
              <div className="cl-top">
                <div className="cl-t1">
                  <p>Name</p>
                  <input />
                </div>
                <div className="cl-t1">
                  <p>E-mail</p>
                  <input />
                </div>
              </div>
              <div className="cl-bottom">
                <p>Message</p>
                <textarea />
              </div>
              <div className="cl-button">
                <button>Send</button>
              </div>
            </form>
            <div className="contact-right">
              <h1>Contact Us Today</h1>
              <p>
                Fill out form below to get in touch with us. We are here to help
                and answer any questions you may have
              </p>
            </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact