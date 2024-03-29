import React, { useState, useContext, useEffect } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import Toures, { tours } from './Toures'
import { store1 } from '../App'
import Subscriptin from './Subscriptin'
import Clints from './Clints'
import Gallary from './Gallary'
import Experiance from './Experiance'
import BestService from './BestService'
const Home = ({ addtocart, login, ProductShow }) => {
    const navigate = useNavigate()
    const show = (Product) => {
        console.log('product', Product);
        ProductShow(Product)
        navigate('/Myshow')

    }

    useEffect(() => {
        if (!login) navigate("/")
    }, [login])


    const [search, setsearch] = useState('')
    const [islogin, setislogin] = useContext(store1)

    return (
        //  Hero section start here 
        <div>
            <div class="container text-left pt-4 mt-5 pb-4 ">
                <div class="row align-items-start">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className='d-flex  align-items-center '>
                            <div>
                                <span style={{ backgroundColor: 'orange', borderRadius: '10px', padding: '2px' }}>Know before you go</span>
                            </div>
                            <img style={{ width: '40px' }} src={require('../assets/images/world.png')} alt="" />
                        </div>
                        <h1>Travelling Opens <br /> the Door to <br /> Creating <span className='text-warning'>Memories</span> </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod optio? Quidem eos placeat corporis pariatur sed aut eveniet optio quod vero exercitationem nam, velit corrupti esse id dolores soluta. Ipsa molestiae, sequi officiis provident, enim dolores eos, corrupti aspernatur illum eum reprehenderit. Laborum quo voluptatum in, rerum ex saepe?</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                <img className='img-fluid' style={{ objectFit: 'cover', width: '150px', height: '300px', borderRadius: '20px', margin: '20px', border: '2px solid yellow' }} src={require('../assets/images/hero-img01.jpg')} alt='logo' />
                                </div>
                                <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                        
                                <video style={{ objectFit: 'cover', width: '150px', height: '300px', borderRadius: '10px', marginTop: '50px', border: '2px solid yellow' }} controls autoPlay src={require('../assets/images/hero-video.mp4')}></video>
                       </div>
                       <div className="col-12 col-sm-12 col-md-4 col-lg-4">

                                <img className='img-fluid' style={{ objectFit: 'cover', width: '150px', height: '300px', borderRadius: '20px', margin: '20px', marginTop: '80px', border: '2px solid yellow' }} src={require('../assets/images/hero-img02.jpg')} alt='logo' />

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* location  distence search bar */}

            <div class="container text-left pt-4">
                <div class="row align-items-start shadow-lg w-75 " style={{ borderRadius: '15px' }}>
                    <div class="col-12 col-sm-12 col-md-3 col-lg-3 " style={{ borderRight: '0.1px solid gray' }}>
                        <p className='fs-5'> <i className="fa-solid fa-location-dot text-warning mx-2"></i>Location</p>
                        <input className='form-control' value={search} onChange={(e) => setsearch(e.target.value)} type="text" placeholder='where are you going?' />
                    </div>
                    <div class="col-12 col-sm-12 col-md-3 col-lg-3" style={{ borderRight: '0.1px solid gray' }}>
                        <p className='fs-5'><i className="fa-solid fa-location-dot text-warning mx-2"></i>Distence</p>
                        <input className='form-control' type="text" placeholder='Distence k/M' />
                    </div>
                    <div class="col-12 col-sm-12 col-md-3 col-lg-3" >
                        <p className='fs-5 '><i class="fa-solid fa-people-roof text-warning m"></i>Max People </p>
                        <input className='form-control' type="text" placeholder='0' />
                    </div>
                    <div class="col-12 col-sm-12 col-md-3 col-lg-3  mx-auto my-auto">
                        <i class="fa-solid fa-magnifying-glass text-white fs-1 " style={{ backgroundColor: 'orange', padding: '10px', borderTopLeftRadius: "10px ", borderBottomRightRadius: "10px ", float: 'right' }}></i>
                    </div>

                </div>
            </div>
            <div class="container pt-4">

                {/* search bar  */}
                <div class="container pt-4">

                    <div class="row">
                        {tours.find((value) => value.title !== search) ?


                            tours.filter((value) => {
                                if (search == '') {
                                    return value;
                                }

                                else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                                    return value;
                                }

                            })

                                .

                                map((value, index) => (

                                    <div key={index} class=" col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 shadow-sm pb-4">
                                        <div class="card" >
                                            <img className='img-fluid ' src={value.photo} class="card-img-top" alt="..." onClick={() => show(value)} />
                                            <div class="card-body">
                                                <div className='d-flex  justify-content-between'>
                                                    <span>{value.city}</span>
                                                    <p class="card-title"><i class="fa-regular fa-star fs-10"></i>
                                                        <i class="fa-regular fa-star fs-10"></i>
                                                        <i class="fa-regular fa-star fs-10"></i>
                                                        <i class="fa-regular fa-star fs-10"></i>
                                                        <i class="fa-regular fa-star fs-10"></i>
                                                        Not rated</p>



                                                </div>
                                                <h5 class="card-title">{value.title}</h5>

                                            </div>
                                            <div className='d-flex  justify-content-between p-3'>
                                                <p class="card-text text-warning">{value.price} <span className='text-black'>/ per <br /> person</span></p>
                                                <a href="#" class="btn btn-sm btn-warning h-25 " onClick={() => addtocart(value)}>Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                )) : <p>No data found</p>


                        }
                    </div>

                </div>
            </div>



            {/* best services  */}
            <BestService />



            {/* Explore  */}



            {/* experience page  */}
            <Experiance />



            {/* Gallary  */}
            <Gallary />



            {/* Clints love  */}
            <Clints />




            {/* Subscription  */}
            <Subscriptin />


            {/* main div  */}
        </div>
    )
}

export default Home