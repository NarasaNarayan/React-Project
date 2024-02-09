import React from 'react'
import '../App.css'
const Gallary = () => {
  return (
    <div>
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
    </div>
  )
}

export default Gallary