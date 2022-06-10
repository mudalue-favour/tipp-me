import React from 'react'
import './App.css'
import Loginmodal from './components/modals/Loginmodal'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h4>
              Tip<span style={{ color: 'green' }}>-me</span>
            </h4>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#myModal"
                  data-toggle="myModal"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Sign-in
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" id="sign-up">
                  Sign-up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Loginmodal />
    </div>
  )
}

export default Navbar
