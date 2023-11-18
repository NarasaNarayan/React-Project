import React from 'react'

const Experiance = () => {
  return (
    <div>
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
    </div>
  )
}

export default Experiance