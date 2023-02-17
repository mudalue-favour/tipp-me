import React from 'react'

import Navbar from './../Navbar'
function Header() {
  return (
    <div id="header">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col header-col">
            <h1 className="text rainbow-text ">welcome.</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              eveniet.
            </p>
            <p>dont have yet have an account?</p>
            <a
              href="#"
              className="btn ready-btn"
              data-bs-toggle="modal"
              data-bs-target="#modal-2"
            >
              <span className="fa fa-user-plus plus"></span>
              Sign up For Free
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
