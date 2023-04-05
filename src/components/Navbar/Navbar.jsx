import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/freshcart-logo.svg'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt='logo' width={100}/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to="Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="carts">Carts</Link>
              </li>

            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <i className='fab mx-2 fa-facebook'></i>
                <i className='fab mx-2 fa-instagram'></i>
                <i className='fab mx-2 fa-twitter'></i>
                <i className='fab mx-2 fa-tiktok'></i>
                <i className='fab mx-2 fa-linkedin'></i>

              </li>

              <li className="nav-item">
                <Link className="nav-link" to="login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="register">Register</Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
