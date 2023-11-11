import React,{useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Home from './Home'
import { store } from '../App'
import { store1 } from '../App'

const Login = () => {
const navigate=   useNavigate()


    const [email, setemail] = useState('')
    const [pasd, setpasd] = useState('')
    const [name, setname] = useContext(store)
    const [islogin, setislogin] = useContext(store1)








    const submitHanler=()=>{
        const storeemail=    localStorage.getItem('email')
        const storepasd=   localStorage.getItem('pasd')
        const storename=   localStorage.getItem('name')


        if(email==''){
            alert('email should not be emty')
        }
        else if(pasd==''){
            alert('pasd should not be emty')
        }
        
            
        else if( storeemail==email && storepasd==pasd){
   setislogin(true)

   navigate('/Home')
   setname({...name,storename})
       



        
  

   
        }
        
        else{
            alert('invalid username and password')
       
        

    
        }
      }
    return (
        <div>

            <div class="container text-center p-4 ">
                <div class="row align-items-end shadow-lg">
                    <div class=" col">
                        <img className='img-fluid' style={{ height: '400px' }} src={require('../assets/images/login.png')} alt='' />

                    </div>
                    <div className=" col  " >

                        <div className='bg-warning p-4' style={{ width: '50%' }}>
                    <img className='img-fluid' style={{width:'50px'}} src={require('../assets/images/user.png')} alt='' />

                        <h3 className='text-white mb-4'>Login</h3>
                            <div className="mb-3 row  ">
                                <div class="col ">
                                    <input type="email"  value={email} onChange={(e)=>setemail(e.target.value)} style={{ width: '100%' }} class="form-control"  placeholder='Email' />
                                </div>
                            </div>
                            <div classNameass="mb-3 row">
                                <div classNamess="col-sm-10">
                                    <input type="password" value={pasd} onChange={(e)=>setpasd(e.target.value)} style={{ width: '80%' }} class="form-control"  placeholder='Password' />
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-dark  mt-4 ' onClick={submitHanler}>Login</button>
                             <div className=' '>
                             <p className='text-white'>Don't have an <br/>account</p>
                                <Link  style={{textDecoration:'none',color:'black'}} to='/Registar'>Registar</Link>
                             </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default (Login)