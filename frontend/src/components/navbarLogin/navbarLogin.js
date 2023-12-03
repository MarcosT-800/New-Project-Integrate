import React from 'react';
import { Link } from 'react-router-dom';

export default function navbarLogin() {
  return (
    <nav className="navbar navbar-expand-lg bg-light" style={{ padding: '20px 0px' }}>
      <div className="container-fluid">
      <img
                    src="/EngetecLogo.png"
                    alt="Imagem de login"
                    className="img-fluid ml-3 h-auto"
                    style={{width: '150px'}}
                    />
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        {/*   <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}