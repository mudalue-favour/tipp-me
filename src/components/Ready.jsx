import React from 'react'

function Ready() {
  return (
    <div className="redy">
      <div className="container-fluid">
        <div className="row ready">
          <div className="col">
            <h1 className="rainbow-text"> Ready to get started</h1>
            <p>
              Create your free account and get your your service worth in TIPS{' '}
            </p>
            <a
              href="#"
              className="btn header-btn"
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

export default Ready
