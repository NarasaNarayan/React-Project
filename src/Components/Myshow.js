import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Myshow = ({ product }) => {
const [price, setprice] = useState(0)
let totalprice = 0;
  useEffect(() => {
    totalprice = 0;
    console.log(totalprice);
    product.map((item) => {
      totalprice += (item.quantity * item.price)
    })
    setprice(totalprice)
  }, [product])
  
  const usenavigate = useNavigate()
  const close = () => {
    usenavigate('/Home')
  }
  return (
    <div className='container'>
      <h1>my show images</h1>
      <div class="row d-flex border-2">
        {product.map((item, index) => (
          <div key={index}>
            <div classNamess="col-12 col-md-12 d-flex justify-content-around ">
              <div><img className='img-fluid w-50' src={item.photo} alt="" />
              </div>
              <div>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <h1>Total Price:{price}</h1>
                <button className='btn  btn-primary' onClick={close}>close</button>
              </div>

            </div>


          </div>

        ))}
      </div>
    </div>
  )
}

export default Myshow