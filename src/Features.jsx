import React from 'react'

import dis from '../src/assets/send.png'
import secured from '../src/assets/secured.png'
import speed from '../src/assets/fast.png'

function Features() {
  return (
    <div>
      <div className="container-fluid feature">
        <div className="row fit">
          <div className="col-lg-6 feature-1 align">
            <h1>speedy services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur,
              <br /> adipisicing elit. Ducimus voluptatem, fuga consequuntur{' '}
              <br /> cum quo maxime!
            </p>
          </div>
          <div className="col-lg-6 ">
            <img
              src={secured}
              alt=""
              className="feature-img img-fluid"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </div>
        </div>

        <div className="row fit">
          <div className="col-lg-6 align">
            <img
              src={speed}
              alt=""
              className="feature-img img-fluid"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </div>
          <div className="col-lg-6 feature-1 align">
            <h1>Highly Secure</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
              Ducimus voluptatem, fuga consequuntur <br /> cum quo maxime!
            </p>
          </div>
        </div>

        <div className="row fit">
          <div className="col-lg-6 feature-1 align">
            <h1>
              Supports <br /> Disintermediation
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
              Ducimus voluptatem, fuga consequuntur <br /> cum quo maxime!
            </p>
          </div>
          <div className="col-lg-6 ">
            <img
              src={dis}
              alt=""
              className="feature-img img-fluid"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
