import React, { useState,useEffect } from 'react'

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
    <div >


      {
        cart.length === 0 ? <h1>Cart is emty</h1> :
          <div className='bg-warning text-left'>
            <h1>My Bookings</h1>
      
            <div class="container">
              <div class="row">
                {cart.map((item, index) => (<div className=' col-md-12 col-lg-12  justify-content-around align-items-center p-4 img-fluid ' key={index}>
                  <div className='d-flex justify-content-around align-items-left'>
                    <div><img src={item.photo} alt="somethinsg" style={{ width: "100px" }} />
                    </div>
                    <div className='p-4'>{item.title}</div>
                    <div> <button className='btn btn-primary' onClick={() => increment(item)}>+</button> </div>
                    <div> <button className='btn btn-primary' onClick={() => decrement(item)}>-</button> </div>


                    <div className='p-4'>{item.title}</div>
                    <div className='p-4'>{item.quantity}</div>


                    <div className='p-4'>{item.price}</div>

                    <button className='btn btn-primary btn-sm h-25 d-flex align-items-center' onClick={() => removehandler(item)}>remove</button>
                  </div>

                </div>))}

                <h1>Total price :${price}</h1>

              </div>
            </div>






          </div>
      }
    </div>
  )
}

export default Cart