import React, { useContext, useState } from 'react'
// import {logo} from '../src/assets/images/logo.png'
import {Link} from 'react-router-dom'
import { store } from '../App'
import { store1 } from '../App'


const Header = () => {
  const [color,setcolor]=useState('');
  const [name, setname] = useContext(store)
  const [islogin, setislogin] = useContext(store1)
  const [login, setlogin] = useState('login')
 console.log('name',name.storename);
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">      <img style={{height:'30px'}} src={require('../assets/images/logo.png')} alt='' />
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" value={color} onChange={(e)=>setcolor(e.target.value)}>
          <Link  className="nav-link "  to="/Home" >Home</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Toures">Toures</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Registar</Link>
        </li>
      { islogin ? <li style={{backgroundColor:'yellow',marginTop:'2px', borderRadius:'10px',padding:'5px',fontSize:'15px'}}>{name.storename}</li> :
        <li className="nav-item">
          <Link className="nav-link" to="/Login"></Link>
        </li>
        
        }

        <li className="nav-item">
          <Link className="nav-link bg-warning  " to="/cart" style={{borderRadius:'10px'}}> MyBookings</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
     </div>
  )
}

export default Header