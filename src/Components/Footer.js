import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className="container text-left ">
  <div className="row shadow-lg">
    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
      <img style={{height:'30px'}} src={require('../assets/images/logo.png')} alt='' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> A voluptates temporibus cumque, hic at sed laboriosam animi nesciunt.</p>
      <div>
      </div>

    </div>
    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
      <h6>Discover</h6>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link "  to="/Home">Home</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Toures">Toures</Link>
        </li>
        </ul>
      
    </div>
    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
    <h6>Quick links</h6>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link "  to="/Gallary">Gallary</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="/Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Registar">Registar</Link>
        </li>
        </ul>
    </div>
    <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-left">
    <h6>Contact</h6>
    <div>
    <p><i className="fa-solid fa-address-book text-warning"></i> <span style={{fontWeight:'bolder'}}>Address:</span>  Shhivamogha, Karnataka</p>
    </div>
    <div>
    <p><i className="fa-solid fa-envelope text-warning"></i> <span style={{fontWeight:'bolder'}}>Email:</span> abc.com</p>
    </div>
    <div>
    <p><i className="fa-solid fa-phone text-warning"></i> <span style={{fontWeight:'bolder'}}>Phone:</span> 6380673093</p>
    </div>
   

    </div>
  </div>
</div>
    </div>
  )
}

export default Footer