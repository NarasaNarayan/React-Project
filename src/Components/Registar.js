import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'

const Registar = ({login}) => {
    const navigate = useNavigate()
    const [user, setuser] = useState({
        email: '',
        username: '',
        password: ''
    })

    useEffect(() => {
        if(login) navigate("/Home")
      }, [login])

    let setUserData = (e) => {
        const { name, value } = e.target
        setuser(() => ({
            ...user,
            [name]: value
        }))
    }


    const submitHanler = () => {
        if (user.name == '') {
            alert('name should not be emty')
        }
        else if (user.email == '') {
            alert('eamil should not be emty')
        }
        else if (user.password == '') {
            alert('pasd should not be emty')
        } else {
            let usersLocal = JSON.parse(localStorage.getItem('users'))
                if (usersLocal === null) usersLocal = []
                const users = [...usersLocal]
            const result = users.find(item =>{
                if (item.email == user.email) {
                    alert("user already registered please login")
                    return true
                }
                return false
            })
            if(!result){
            users.push(user)
            localStorage.setItem('users',JSON.stringify(users))
            alert('user registered')
            navigate('/Login')
            }
        }
    }

    return (
        <div>

        {/* <div class="container text-center p-4 ">
            <div class="row align-items-end shadow-lg">
                <div class=" col align-items-end mx-4">
                    <img className='img-fluid' style={{ height: '400px' }} src={require('../assets/images/register.png')} alt='' />

                </div>
                <div className=" col  " >

                    <div className='bg-warning p-4' style={{ width: '50%' }}>
                        <img className='img-fluid' style={{ width: '50px' }} src={require('../assets/images/user.png')} alt='' />

                        <h3 className='text-white mb-4'>Register</h3>
                        <div className="mb-3 row  ">
                            <div class="col-sm-10">
                                <input type="text" name='username' value={user.username} onChange={setUserData} style={{ width: '100%' }} class="form-control" id="inputPassword" placeholder='User Name' />
                            </div>
                        </div>
                        <div className="mb-3 row  ">
                            <div class="col-sm-10">
                                <input type="email" name='email' value={user.email} onChange={setUserData} style={{ width: '100%' }} class="form-control" placeholder='Email' />
                            </div>
                        </div>
                        <div classNameass="mb-3 row">
                            <div classNamess="col-sm-10">
                                <input type="password" name='password' value={user.password} onChange={setUserData} style={{ width: '80%' }} class="form-control" placeholder='Password' />
                            </div>
                        </div>
                        <div>
                            <button className='btn btn-dark  mt-4 ' onClick={submitHanler}>Create Account</button>
                            <div className=' '>
                                <p className='text-white'>Already  have an <br />account?</p>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to='/Login' >Login</Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div> */}

        <div className="container pt-4 pb-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6  mx-auto my-auto d-flex align-items-center">
                        <img classNameName='img-fluid' style={{width:'500px', height: '400px' }} src={require('../assets/images/register.png')} alt='' />
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6  ">
                        <div className="card  text-center  ms-auto justify-content-left " style={{ border: 'none' }}>
                            <div className="card-body m-auto bg-warning  w-50 pt-5 pb-5">
                                <svg style={{color:'white'}} className="text-white" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16" >
                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                                </svg>
                                <h2 className="text-center text-white pt-3 pb-3">Registar</h2>

                                <input type="email" className="form-control pb-2  mb-3 " name="username" value={user.username} onChange={setUserData} placeholder="enter email" />
                                <input type="email" className="form-control pb-2  mb-3 " name="email" value={user.email} onChange={setUserData} placeholder="enter email" />
                                <input type="password" name="password" value={user.password} onChange={setUserData}  className="form-control pb-2 mb-3" placeholder="password" />
                                <button className="btn btn-dark  text-center text-white form-control mb-3" onClick={submitHanler} >Create Account</button>
                                <Link to="/Home" className="text-white list-unstyled text-decoration-none text-center m-auto " > Already do you have <br/> account?</Link> <br />

                                <Link to='/Login' className="text-decoration-none ">Login</Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Registar