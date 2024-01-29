import React, { useContext, useState } from 'react'
// import {logo} from '../src/assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../App'
import { store1 } from '../App'


const Header = ({ user, login, handleLogout,cart }) => {
  const [color, setcolor] = useState('');
  const navigate = useNavigate()
  const logoutHandler = ()=>{
    localStorage.removeItem("loggedInUser")
    handleLogout()
    navigate("/")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">      <img style={{ height: '30px' }} src={require('../assets/images/logo.png')} alt='' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" value={color} onChange={(e) => setcolor(e.target.value)}>
                <Link className="nav-link " to="/Home" >Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Toures">Toures</Link>
              </li>
              {login ? <li className="nav-item">
                <Link className="nav-link" onClick={()=>{logoutHandler()}}>Logout</Link> </li> : <li className="nav-item">
                  <Link className="nav-link" to="/">Registar</Link>
                </li>
              }
                {login ? 
                  <li className="nav-item">
                    <Link className="nav-link " to="/Login">{user.username}</Link>
                  </li>
                  :
                  <li className="nav-item">
                    <Link className="nav-link" to="/Login">Login</Link>
                  </li>
                }
                

                <li className="nav-item">
                  <Link className="nav-link bg-warning  " to="/cart" style={{ borderRadius: '10px' }}> MyBookings  <span className='text-white bg-info p-1'>{cart.length}</span></Link>
                 
                </li>


              </ul>
     
    </div>
        </div>
      </nav>
    </div>
  )
}

export default Header