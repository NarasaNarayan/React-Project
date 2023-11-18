import React, { useEffect } from 'react'
import tourImg01 from "../assets/images/tour-img01.jpg";
import tourImg02 from "../assets/images/tour-img02.jpg";
import tourImg03 from "../assets/images/tour-img03.jpg";
import tourImg04 from "../assets/images/tour-img04.jpg";
import tourImg05 from "../assets/images/tour-img05.jpg";
import tourImg06 from "../assets/images/tour-img06.jpg";
import tourImg07 from "../assets/images/tour-img07.jpg";
import { useNavigate } from 'react-router-dom';


export const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address:
      "West London Family Golf Centre, Ruislip Rd, Northolt UB5 6QZ, United Kingdom",
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address:
      "West London Family Golf Centre, Ruislip Rd, Northolt UB5 6QZ, United Kingdom",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address:
      "West London Family Golf Centre, Ruislip Rd, Northolt UB5 6QZ, United Kingdom",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address:
      "West London Family Golf Centre, Ruislip Rd, Northolt UB5 6QZ, United Kingdom",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address:
      "West London Family Golf Centre, Ruislip Rd, Northolt UB5 6QZ, United Kingdom",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address:
      "West London Family Golf Centre, Ruislip Rd, Northolt UB5 6QZ, United Kingdom",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address:
      "West London Family Golf Centre, Ruislip Rd, Northolt UB5 6QZ, United Kingdom",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    address:
      "West London Family Golf Centre, Ruislip Rd, Northolt UB5 6QZ, United Kingdom",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

const Toures = ({ addtocart,login,ProductShow }) => {
  const navigate=useNavigate()
const show=(Product)=>{
    ProductShow(Product)
    navigate('/Myshow')
}

  useEffect(() => {
    if(!login) navigate("/")
  }, [login])


  console.log('toures', tours.title);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <span className='shadow-lg' style={{ position: 'relative', left: '45%', top: '11rem', color: 'white', fontSize: '2rem' }}>All Toures</span>
            <img className='img-fluid' style={{ height: "20rem", width: '100%' }} src={require('../assets/images/tour.jpg')} alt="" />
          </div>
        </div>

      </div>
      {/* toures images  */}
      <div class="container pt-4">
        <div class="row">
          {tours.map((item, index) => (
            <div key={index} class=" col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 shadow-lg pb-4">
              <div class="card" >
                <img className='img-fluid '   src={item.photo} onClick={()=>show(item)} class="card-img-top" alt="..." />
                <div class="card-body">
                  <div className='d-flex  justify-content-between'>
                    <span>{item.city}</span>
                    <p class="card-title"><i class="fa-solid fa-star  text-warning"></i>Not rated</p>



                  </div>
                  <h5 class="card-title">{item.title}</h5>

                </div>
                <div className='d-flex  justify-content-between p-3' >
                  <p class="card-text text-warning">{item.price} <span className='text-black'>/ per <br /> person</span></p>
                  <button class="btn btn-sm btn-warning h-25 " onClick={() => addtocart(item)}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* subscription  */}
      <div class="container text-left">
          <div class="row align-items-start " style={{ backgroundColor: '#91b1f1', marginBottom: '50px', paddingBottom: '50px', paddingTop: '50px' }}>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5">
              <h3 className='pb-4'>Subscribe Now for Usefull, <br /> Travelling Information</h3>
              <div className='bg-white d-flex justify-content-between w-75 border-1
  '>
                <input className='border-3' type="text" placeholder='Enttre ypur name' />
                <button className='btn btn-lg btn-warning border-0 m-1'>Submit</button>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro velit ea quisquam labore ipsam praesentium eum, sit odit dignissimos.</p>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  align-items-start">
              <img className='img-fluid' style={{ height: '300px' }} src={require('../assets/images/male-tourist.png')} alt="" />
            </div>

          </div>
      </div>


      {/* main div  */}
    </div>

  )
}

export default Toures;