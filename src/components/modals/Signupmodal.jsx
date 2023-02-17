import React, { useState } from 'react'
import { postRequest } from '../../utils/api'
const Loginmodal = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await postRequest({
      email,
      password,
    })
    console.log(response)
  }

  return (
    <>
      <div
        class="modal fade"
        id="modal-2"
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
              <h4 className="align" style={{ color: 'black' }}>
                Tip-me
              </h4>
              <form onSubmit={handleSubmit}>
                <input
                  defaultValue={email}
                  class="form-control"
                  type="email"
                  placeholder="Input email or username"
                  onChange={({ target: { value } }) => setEmail(value)}
                />
                <input
                  defaultValue={password}
                  class="form-control"
                  type="password"
                  placeholder="Input password"
                  onChange={({ target: { value } }) => setPassword(value)}
                />
                <button className="btn log align">Sign up</button>
              </form>

              <div className="modal-button">
                <h5 className="" style={{ color: 'Black' }}>
                  or
                </h5>
                <a href="#" className="btn google">
                  <span class="fa fa-google "></span> Continue with Google
                </a>
              </div>

              <h6 className="sign">
                Already have an account?
                <a
                  className="sign-link"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-1"
                >
                  sign-In
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
