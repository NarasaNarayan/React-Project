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

          

            <div className="container pt-4 pb-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6  mx-auto my-auto align-items-center">
                        <img classNameName='img-fluid' style={{ height: '400px' }} src={require('../assets/images/login.png')} alt='' />
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 ms-start ">
                        <div className="card  text-center align-items-left " style={{ border: 'none' }}>
                            <div className="card-body m-auto bg-warning  w-50 pt-5 pb-5">
                                <svg style={{color:'white'}} className="text-white" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-person-fill" viewBox="0 0 16 16" >
                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                                </svg>
                                <h2 className="text-center text-white pt-3 pb-3">Login</h2>

                                <input type="email" className="form-control pb-2  mb-3 " name="email" value={user.email} onChange={setUserData} placeholder="enter email" />
                                <input type="password" name="password" value={user.password} onChange={setUserData}  className="form-control pb-2 mb-3" placeholder="password" />
                                <button className="btn btn-dark  text-center text-white form-control mb-3" onClick={submitHanler} >login</button>
                                <Link to="/Home" className="text-white list-unstyled text-decoration-none text-center m-auto " > don't you account?</Link> <br />

                                <Link to='/' className="text-decoration-none ">Registar</Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default (Login)