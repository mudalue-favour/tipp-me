import React from 'react'

const Loginmodal = () => {
  return (
    <>
      <div
        class="modal fade"
        id="modal-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h4 className="align" style={{ color: 'white' }}>
                Tip-me
              </h4>

              <input
                class="form-control"
                type="email"
                id=""
                placeholder="email or username"
              />
              <input
                class="form-control"
                type="email"
                id=""
                placeholder="password"
              />

              <div className="modal-button">
                <a href="#" className="btn log">
                  Sign In
                </a>

                <h5 className="" style={{ color: 'white' }}>
                  or
                </h5>
                <a href="#" className="btn google">
                  <span class="fa fa-google "></span> Continue with Google
                </a>
              </div>

              <h6 className="sign">
                Dont have an account?
                <a
                  className="sign-link"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-2"
                >
                  sign-up
                </a>
              </h6>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loginmodal
