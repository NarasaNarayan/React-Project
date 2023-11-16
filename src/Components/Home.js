import React, { useState,useContext, useEffect } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import { tours } from './Toures'
import { store1 } from '../App'
const Home = ({addtocart,login,ProductShow}) => {
  const navigate=useNavigate()
const show=(Product)=>{
    ProductShow(Product)
    navigate('/Myshow')

}

useEffect(() => {
  if(!login) navigate("/")
}, [login])


const [search,setsearch]=useState('')
const [islogin,setislogin]=useContext(store1)

    return (
        
        <div>
            <div class="container text-left pt-4 mt-5 pb-4">
                <div class="row align-items-start">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className='d-flex  align-items-center '>
                        <div>
                                  <span style={{backgroundColor:'orange',borderRadius:'10px',padding:'2px'}}>Know before you go</span>
                        </div>
                            <img style={{ width: '40px' }} src={require('../assets/images/world.png')} alt="" />
                        </div>
                        <h1>Travelling Opens <br /> the Door to <br /> Creating <span className='text-warning'>Memories</span> </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quod optio? Quidem eos placeat corporis pariatur sed aut eveniet optio quod vero exercitationem nam, velit corrupti esse id dolores soluta. Ipsa molestiae, sequi officiis provident, enim dolores eos, corrupti aspernatur illum eum reprehenderit. Laborum quo voluptatum in, rerum ex saepe?</p>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 d-flex">
                        <img className='img-fluid' style={{ width: '150px', height: '300px', borderRadius: '20px', margin: '20px', border: '2px solid yellow' }} src={require('../assets/images/hero-img01.jpg')} alt='logo' />

                        <video style={{objectFit:'cover', width: '150px', height: '300px', borderRadius: '10px', marginTop: '50px', border: '2px solid yellow' }} controls autoPlay src={require('../assets/images/hero-video.mp4')}></video>

                        <img className='img-fluid' style={{ width: '150px', height: '300px', borderRadius: '20px', margin: '20px', marginTop: '80px', border: '2px solid yellow' }} src={require('../assets/images/hero-img02.jpg')} alt='logo' />
                    </div>

                </div>
            </div>

            {/* location  distence */}

            <div class="container text-left pt-4">
                <div class="row align-items-start shadow-lg w-75 " style={{ borderRadius: '25px' }}>
                    <div class="col " style={{ borderRight: '0.5px solid gray' }}>
                        <p className='fs-5'> <i class="fa-solid fa-location-dot text-warning"></i>Location</p>
                        <input value={search} onChange={(e)=>setsearch(e.target.value)}h type="text" placeholder='where are you going?' />
                    </div>
                    <div class="col" style={{ borderRight: '0.5px solid gray' }}>
                        <p className='fs-5'><i class="fa-solid fa-location-dot text-warning"></i>Distence</p>
                        <input type="text" placeholder='Distence k/M' />
                    </div>
                    <div class="col" >
                        <p className='fs-5'><i class="fa-solid fa-people-roof text-warning"></i>Max People </p>
                        <input type="text" placeholder='0' />
                    </div>
                    <div class="col  mx-auto my-auto">
                        <i class="fa-solid fa-magnifying-glass text-white " style={{ backgroundColor: 'orange', padding: '10px', borderTopLeftRadius: "10px ", borderBottomRightRadius: "10px " }}></i>
                    </div>

                </div>
            </div>
            <div class="container pt-4">

            {/* search bar  */}
            <div class="container pt-4">

        <div class="row">
            {tours.filter((value)=>{
                if(search==''){
                    return value;
                }
                else if(value.title.toLowerCase().includes(search.toLowerCase())){
                    return value;
                }
            })
           
            .
           
          map((value, index) => (
           
            <div key={index} class=" col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 shadow-lg pb-4">
              <div class="card" >
                <img className='img-fluid ' src={value.photo} class="card-img-top" alt="..." onClick={()=>show(value)}/>
                  <div class="card-body">
                  <div className='d-flex  justify-content-between'>
                  <span>{value.city}</span>
                  <p class="card-title"><i class="fa-solid fa-star  text-warning"></i>Not rated</p>



                  </div>
                    <h5 class="card-title">{value.title}</h5>
                   
                  </div>
                  <div className='d-flex  justify-content-between p-3'>
                  <p class="card-text text-warning">{value.price} <span className='text-black'>/ per <br/> person</span></p>
                    <a href="#" class="btn btn-sm btn-warning h-25 " onClick={()=>addtocart(value)}>Book Now</a>
                  </div>
              </div>
            </div>
      ))}

        </div>
        
      </div>
      </div>
 
                

            {/* best services  */} 
            <div className="container text-left pt-5 pb-4">
                <div className="row shadow-lg">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 shadow-lg">
                        <span className='text-warning'>What We Serve</span>
                        <h2>We offer our <br />  best services</h2>




                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 shadow-lg">
                        <img src={require('../assets/images/weather.png')} alt="" style={{ backgroundColor: 'orange', width: '50px', borderRadius: '20px', padding: '5px' }} />

                        <h6>Calicate Weather</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis tenetur debitis itaque, totam ipsam dolores dignissimos, maiores architecto neque commodi nostrum enim!</p>

                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 shadow-lg">
                        <img src={require('../assets/images/guide.png')} alt="" style={{ backgroundColor: 'orange', width: '50px', borderRadius: '20px', padding: '5px' }} />

                        <h6>Best tour guide</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis tenetur debitis itaque, totam ipsam dolores dignissimos, maiores architecto neque commodi nostrum enim!</p>                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-left shadow-lg">
                        <img src={require('../assets/images/customization.png')} alt="" style={{ backgroundColor: 'orange', width: '50px', borderRadius: '20px', padding: '5px' }} />
                        <h6>Customization</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis tenetur debitis itaque, totam ipsam dolores dignissimos, maiores architecto neque commodi nostrum enim!</p>



                    </div>
                </div>
            </div>


            {/* Explore  */}


          
            {/* experience page  */}

            <div class="container text-left pt-4 shadow-lg mb-4 mt-4">
                <span className='bg-warning p-1' style={{ borderRadius: '8px' }}>Experience</span>
                <div class="row align-items-start">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h3>With our all experience , <br /> we will serve you</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis distinctio, laborum recusandae aperiam odio.</p>
                        <div className='d-flex pt-5 text-white text-center align-items-center mx-auto  my-auto' style={{ justifyContent: 'space-around' }}>
                           <button className='btn btn-warning btn-lg'>15k</button>
                           <button className='btn btn-warning btn-lg'>2k</button>
                           <button className='btn btn-warning btn-lg'>12k</button>

                        </div>



                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">

                        <img className='img-fluid w-75' src={require('../assets/images/experience.png')} alt="" />
                    </div>

                </div>
            </div>

            {/* Gallary  */}
            <div class="container text-left pt-4">
                <span className='bg-warning p-1' style={{ borderRadius: '8px' }}>Gallarey</span>
                <h3>Visit our custumer   tour gallaery</h3>

                <div class="row align-items-start pt-4">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                        <img className='img-fluid gallery ' src={require('../assets/images/gallery-01.jpg')} alt="" />

                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">

                        <img className='img-fluid  gallery' src={require('../assets/images/gallery-02.jpg')} alt="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">

                        <img className='img-fluid gallery' src={require('../assets/images/gallery-03.jpg')} alt="" />
                    </div>                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">

                        <img className='img-fluid gallery' src={require('../assets/images/gallery-04.jpg')} alt="" />
                    </div>

                </div>
            </div>
            <div class="container text-left pt-4 pb-4 shadow-lg mb-4">


                <div class="row align-items-start">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                        <img className='img-fluid gallery' src={require('../assets/images/gallery-05.jpg')} alt="" />

                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">

                        <img className='img-fluid gallery' src={require('../assets/images/gallery-06.jpg')} alt="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">

                        <img className='img-fluid gallery' src={require('../assets/images/gallery-07.jpg')} alt="" />
                    </div>                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">

                        <img className='img-fluid gallery' src={require('../assets/images/gallery-08.jpg')} alt="" />
                    </div>

                </div>
            </div>


            {/* Clints love  */}

            <div class="container text-left pt-4 shadow-lg pb-4 mb-4">
                <span className='bg-warning p-1' style={{ borderRadius: '8px' }}>Clints Love</span>
                <h3>What our clints say about us</h3>

                <div class="row align-items-start pt-4  " style={{marginBottom:'150px'}}>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, mollitia vel? Sequi rerum quo ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, mollitia vel? Sequi rerum quo ullam.</p>
                        <div className='d-flex ' >
                            <img className='img-fluid w-25' src={require('../assets/images/ava-1.jpg')} alt="" />
                            <p className='px-4 ' style={{fontWeight:'bolder'}}> Jhon dio <br /><span  style={{fontWeight:'normal'}}>Customer</span></p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, mollitia vel? Sequi rerum quo ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, mollitia vel? Sequi rerum quo ullam.</p>
                        <div className='d-flex ' >
                            <img className='img-fluid w-25' src={require('../assets/images/ava-2.jpg')} alt="" />
                            <p className='px-4 ' style={{fontWeight:'bolder'}}> Catherne jo <br /><span  style={{fontWeight:'normal'}}>Customer</span></p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, mollitia vel? Sequi rerum quo ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, mollitia vel? Sequi rerum quo ullam.</p>
                        <div className='d-flex ' >
                            <img className='img-fluid w-25' src={require('../assets/images/ava-3.jpg')} alt="" />
                            <p className='px-4 ' style={{fontWeight:'bolder'}}> Peter Alice <br /><span  style={{fontWeight:'normal'}}>Customer</span></p>
                        </div>
                    </div>

                </div>
            </div>


            {/* Subscription  */}

            <div class="container text-left">
  <div class="row align-items-start " style={{backgroundColor:'#91b1f1',marginBottom:'50px',paddingBottom:'50px',paddingTop:'50px'}}>
    <div class="col px-5">
      <h3 className='pb-4'>Subscribe Now for Usefull, <br/> Travelling Information</h3>
    <div className='bg-white d-flex justify-content-between w-75 
    ' style={{borderRadius:'20px'}}>
        <input className='border-3' type="text" placeholder='Enttre ypur name'/>
        <button className='btn btn-lg btn-warning border-0 m-1'>Submit</button>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro velit ea quisquam labore ipsam praesentium eum, sit odit dignissimos.</p>
    </div>
    <div class="col  align-items-start">
      <img className='img-fluid' style={{height:'300px'}} src={require('../assets/images/male-tourist.png')} alt=""/>
    </div>
   
  </div>
</div>

            {/* main div  */}
        </div>
    )
}

export default Home