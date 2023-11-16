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
        <div><div class="container text-center p-4 ">
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
        </div></div>
    )
}

export default Registar