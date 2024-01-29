import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Myshow = ({ product,addtocart }) => {
  const navigate = useNavigate();
  const [person, setperson] = useState(1)
  const [personprice, setpersonprice] = useState(product.price)

  const setchangeperson = (price, e) => {
    setperson(e.target.value)
    setpersonprice(price * e.target.value)

  }

  const CloseHandler = () => {
    navigate('/Home')
  }
  console.log(person);
  return (
    <div className='container pt-5 pb-5 mb-5 bg-white' >
      <div className=' row ' style={{ position: "relative" }}>
        <div style={{ textAlign: 'end' }}>
          <span style={{ textAlign: 'end', padding: "20px", backgroundColor: "red", color: 'white' }} onClick={CloseHandler}><i class="fa-solid fa-x"></i></span>

        </div>


        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  d-flex justify-content-between  justify-content-center align-items-center ">
          <div><img className='img-fluid mx-auto my-auto' src={product.photo} alt="" style={{ width: '20rem', height: '20rem' }} />
          </div>
          </div>


          <div className=' col-12 col-sm-12 col-md-6 col-lg-6 text-start '>


            <h5 className=''>{product.title}</h5>
            <p className=''> <span className='fs-5'>Distance:</span> <br />{product.distance}</p>
            <p className=' '> <span className='fs-5'>Address:</span><br />{product.address}</p>
            <p className=' '> <span className='fs-5'>Rating:</span><br />{product.avgRating}</p>

            <p className=''><span className='fs-5'>Price:</span> {product.price}</p>
            <label className='fs-5' for="">Enter Number Of Persons</label><br />
            <input className='form-control' style={{ border: "1px solid black" }} type="text" value={person} onChange={(e) => (setchangeperson(product.price, e))} placeholder='Select num of persons' />
            <h1 className='pt-4'>TotalPrice:${personprice}</h1>
            <a href="#" class="btn btn-sm btn-warning  " onClick={()=>addtocart(product)}>Book Now</a>

        </div>

            {/* 
              <form action="" className='bg-primary p-4'>
              <p className='pt-4 pb-2'> <span className='fs-5'> Give us rating:</span>
              <i class="fa-regular fa-star fs-10"></i>
              <i class="fa-regular fa-star fs-10"></i>
              <i class="fa-regular fa-star fs-10"></i>
              <i class="fa-regular fa-star fs-10"></i>
              <i class="fa-regular fa-star fs-10"></i>


              </p>

              <p className='pt-4 pb-2'> <span className='fs-5'>reviews:</span>
              <input className='form-control' type="text"placeholder='write your review here'/>
              </p>
           <button className='btn btn-warning btn-sm'> submit </button>
              </form> */}








      </div>

    </div>
  )
}

export default Myshow