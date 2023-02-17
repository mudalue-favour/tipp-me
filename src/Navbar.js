import React from 'react'
import './App.css'
import Loginmodal from './components/modals/Loginmodal'
import Signupmodal from './components/modals/Signupmodal'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="navbar-brand" href="#">
            <h4>
              Tip<span style={{ color: 'green' }}>-me</span>
            </h4>
          </a>
          <button
            class="navbar-toggler bars"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fa fa-bars"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  data-toggle="myModal"
                >
                  <span className="fa fa-home"></span>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  "
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-1"
                >
                  <span className="fa fa-sign-in"></span>
                  Sign-in
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-2"
                >
                  <span className="fa fa-user-plus"></span>
                  Sign-up
                </a>
              </li>

              <li class="nav-item">
                <Link to="/about" class="nav-link">
                  <span className="fa fa-user"></span>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Loginmodal />
      <Signupmodal />
    </div>
  )
}

export default Navbar
