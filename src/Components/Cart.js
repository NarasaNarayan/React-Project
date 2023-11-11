import React, { useState } from 'react'

const Cart = ({cart,removehandler} ) => {
  const [count, setcount] = useState(1)
  return (
    <div className='bg-warning text-left'> 
     <h1>My Bookings</h1>

     <div class="container">
      <div class="row">
      {cart.map((item,index)=>(<div className=' col-md-12 col-lg-12  justify-content-around align-items-center p-4 img-fluid ' key={index }>
      <div className='d-flex justify-content-around align-items-left'>
      <div><img src={item.photo} alt="somethinsg"style={{width: "100px"}}/>
       </div>
     <div className='p-4'>{item.title}</div>
     <div className='p-4'>{item.quantity}</div>

   
        <div className='p-4'>{item.price}</div>

        <button className='btn btn-primary btn-sm h-25 d-flex align-items-center' onClick={()=>removehandler(item)}>remove</button>
        <div className='p-4'>Total Price={item.totalprice}</div>
        </div>

    </div>))}


      </div>
     </div>

    

    
    
    
    </div>
  )
}

export default Cart