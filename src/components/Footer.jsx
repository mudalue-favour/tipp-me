import React from 'react'

function Footer() {
  return (
    <div>
      <footer>
        <div className="container-fluid footer">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <a class="navbar-brand" href="#">
                <h4>
                  Tip<span style={{ color: 'green' }}>-me</span>
                </h4>
              </a>
              <a href="#" className="btn header-btn play">
                <span className="fa fa-google-play plus"></span>
                PlayStore
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 inks">
              <h3>Links</h3>
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#header"
                    data-toggle="myModal"
                  >
                    <span className="fa fa-home"></span>
                    Home
                  </a>
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
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h3>Contact us</h3>
              <p>
                ADDRESS: Lorem ipsum dolor sit amet consectetur <br />{' '}
                adipisicing elit. Quasi, modi?
              </p>
              <p>TELEPHONE: 08873t5576</p>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <h3>Resources</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Accusamus, perferendis.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
