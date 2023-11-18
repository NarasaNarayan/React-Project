import React from 'react'

const Clints = () => {
  return (
    <div>
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
    </div>
  )
}

export default Clints