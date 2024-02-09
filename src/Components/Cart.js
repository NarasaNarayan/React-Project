import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

const Cart = ({ cart, removehandler, increment, decrement }) => {
const [price, setprice] = useState(0)
useEffect(() => {
  let totalprice = 0;
  cart.map((item) => {
    totalprice += (item.quantity * item.price)
  })
  setprice(totalprice)
}, [cart])

  return (
    <div className='container mt-5 mb-5 '>
    
    { cart.length === 0 ? <div class="container-fluid  " style={{height:'500px'}}>
   <div className='d-flex align-items-center justify-content-center'>
   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-cart-x-fill text-warning  " viewBox="0 0 16 16" >
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708"/>
</svg>
   </div>
<h2 className='text-center' style={{marginLeft:''}}>Cart is Emty</h2>
<h4 className='text-center'> <Link className='btn btn-warning text-center' to='/Home' >Countinue Shopping</Link></h4>
        </div>
         :
      <div>
         <div class="row ">

          {
            cart.map((data) => (
              <div>
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="row  mt-2 shadow-sm p-4">
                    <div class="col-3 col-sm-2 col-md-2 col-lg-2 mx-auto shadow-lg">
                      <img className='img-fluid ' src={data.photo} alt="" style={{ width: '100px' }} />
                    </div>
                    <div class="col-6  col-sm-4 col-md-4 col-lg-4">
                      <h4 className='mx-auto my-auto text-center '>{data.title}</h4>
                      <div className='d-flex justify-content-center'>
                        <button onClick={() => decrement(data)} className='btn btn-danger btn-sm'>-</button>
                        <h2 className=' mx-4'>{data.quantity}</h2>
                        <button onClick={() => increment(data)} className='btn btn-success btn-sm'>+</button>
                      </div>

                    </div>
                    <div class="col-3  col-sm-3 col-md-3 col-lg-3 mx-auto my-auto ">
                      <button onClick={() => removehandler(data)} className='btn btn-danger shadow-lg'>Delete</button>
                    </div>
                    <div class="col-12 col-sm-3  col-md-3 col-lg-3 mx-auto my-auto">
                      <div class="row">
                        <div class="col ">
                          <p className=''><span className='fs-5'>Price per person-</span></p>
                        </div>
                        <div class="col my-auto shadow-lg">
                          <p> <span>&#8377;</span>{data.price}</p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))
          }
        </div>
        <div class="row">
          <div class="col-text-left text-end">
            <h4 className='' style={{ marginRight: '3rem' }}>TotalPrice=<span className='fs-5 mx-3'><span>&#8377;</span>{price}</span></h4>
          </div>
        </div>
      </div>
    }
    </div>

  )
}

export default Cart
