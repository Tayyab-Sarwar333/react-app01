import React from "react";

const Navbar = (props) => {
  return (
    <>
      <h1>Muhammad {props.title}</h1>
      <div className="container">
        <nav
          className= "navbar navbar-expand-lg"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contect
                  </a>
                </li>
              </ul>
            
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault">
                 Light Mode 
                </label>

            </div>
          </div>
          
        </nav>
      </div>
    </>
  );
};

export default Navbar;
