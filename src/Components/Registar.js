import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Login from './Login'

const Registar = () => {
const navigate=useNavigate()
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [pasd, setpasd] = useState('')

  const submitHanler=()=>{
    if(name==''){
        alert('name should not be emty')
    }
    else if(email==''){
        alert('eamil should not be emty')
    }
    if(pasd==''){
        alert('pasd should not be emty')
    }
    else{
        alert('user registerd')
        localStorage.setItem('email' ,email)
        localStorage.setItem('pasd' ,pasd)
        localStorage.setItem('name' ,name)

        navigate('/Login')

    }
  }

  return (
    <div><div class="container text-center p-4 ">
    <div class="row align-items-end shadow-lg">
        <div class=" col align-items-end mx-4">
            <img className='img-fluid' style={{ height: '400px' }} src={require('../assets/images/register.png')} alt='' />

        </div>
        <div className=" col  " >

            <div className='bg-warning p-4' style={{ width: '50%' }}>
        <img className='img-fluid' style={{width:'50px'}} src={require('../assets/images/user.png')} alt='' />

            <h3 className='text-white mb-4'>Register</h3>
                <div className="mb-3 row  ">
                    <div class="col-sm-10">
                        <input type="text"  value={name} onChange={(e)=> setname(e.target.value)} style={{ width: '100%' }} class="form-control" id="inputPassword" placeholder='User Name' />
                    </div>
                </div>
                <div className="mb-3 row  ">
                    <div class="col-sm-10">
                        <input type="email" value={email} onChange={(e)=> setemail(e.target.value)} style={{ width: '100%' }} class="form-control"  placeholder='Email' />
                    </div>
                </div>
                <div classNameass="mb-3 row">
                    <div classNamess="col-sm-10">
                        <input type="password" value={pasd} onChange={(e)=> setpasd(e.target.value)} style={{ width: '80%' }} class="form-control"  placeholder='Password' />
                    </div>
                </div>
                <div>
                    <button className='btn btn-dark  mt-4 ' onClick={submitHanler}>Create Account</button>
                 <div className=' '>
                 <p className='text-white'>Already  have an <br/>account?</p>
                    <Link  style={{textDecoration:'none',color:'black'}} to='/Login' >Login</Link>
                 </div>
                </div>
            </div>

        </div>

    </div>
</div></div>
  )
}

export default Registar