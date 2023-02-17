import React from 'react'
import Navbar from './Navbar'
import Abou from '../src/assets/ab.png'

function About() {
  return (
    <div>
      <section className="aboutus">
        <div className="container">
          <Navbar />
          <div className="row row-about">
            <div className="col-lg-6 col-md-6 col-sm-12    about-left">
              <h1 className="top">ABOUT US</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur qui temporibus obcaecati. Quaerat adipisci possimus
                facere. Minima placeat voluptate, excepturi nemo laborum
                tempore. Amet vero in voluptates id harum iste.
              </p>
              <button className="abt-btn" type="submit">
                send email
              </button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12  about-right">
              <img src={Abou} alt="" srcset="" className="about-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
