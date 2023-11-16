import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Home from './Home'
import { store } from '../App'
import { store1 } from '../App'

const Login = ({ login, handleLogin }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (login) {
            navigate("/Home")
        }
    }, [])


    const [user, setuser] = useState({
        email: '',

        password: ''
    })

    let setUserData = (e) => {
        const { name, value } = e.target
        setuser(() => ({
            ...user,
            [name]: value
        }))
    }







    const submitHanler = () => {



        if (user.email == '') {
            alert('email should not be emty')
        }
        else if (user.password == '') {
            alert('pasd should not be emty')
        }
        else {
            const userData = JSON.parse(localStorage.getItem('users'))
            if (userData === null) userData = []
            const users = [...userData]
            const result = users.find(item => {
                if (item.email === user.email) {
                    if (item.password === user.password) {
                        return true
                    }
                }
                return false
            })
            if (result) {
                let currentUser = users.filter(item => {
                    if (item.email == user.email) {
                        return item
                    }
                })
                localStorage.setItem('loggedInUser', JSON.stringify(Object.assign({}, ...currentUser)))
                handleLogin()
                navigate('/Home')
            } else {
                alert('email or password is wrong')
            }
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
                            <img className='img-fluid' style={{ width: '50px' }} src={require('../assets/images/user.png')} alt='' />

                            <h3 className='text-white mb-4'>Login</h3>
                            <div className="mb-3 row  ">
                                <div class="col ">
                                    <input type="email" name="email" value={user.email} onChange={setUserData} style={{ width: '100%' }} class="form-control" placeholder='Email' />
                                </div>
                            </div>
                            <div classNameass="mb-3 row">
                                <div classNamess="col-sm-10">
                                    <input type="password" name='password' value={user.password} onChange={setUserData} style={{ width: '80%' }} class="form-control" placeholder='Password' />
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-dark  mt-4 ' onClick={submitHanler}>Login</button>
                                <div className=' '>
                                    <p className='text-white'>Don't have an <br />account</p>
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Registar</Link>
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