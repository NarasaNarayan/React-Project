import React from 'react'

const About = () => {
  return (
    <div className='container mb-5'>

      <h1 className='text-center'>About me</h1>
      <h4>I am A  Web Devoloper</h4>
      <p>My role as a front-end developer is crucial in creating a visually appealing and user-friendly interface that enhances the overall user experience of a website or web application. If you have any specific questions or if there's anything else you'd like to discuss related to front-end development, feel free to let me know!

      </p>
      <h4 className='mt-5'>Contact Details</h4>
      <hr/>
      <div >
        <p><i className="fa-solid fa-address-book text-warning"></i> <span style={{ fontWeight: 'bolder' }}>Address:</span>  Bannerugatta, Bangalore, Karnataka</p>
      </div>
      <div>
        <p><i className="fa-solid fa-envelope text-warning"></i> <span style={{ fontWeight: 'bolder' }}>Email:</span> Narasa201754@gmail.com.com</p>
      </div>
      <div>
        <p><i className="fa-solid fa-phone text-warning"></i> <span style={{ fontWeight: 'bolder' }}>Phone:</span> 6380673093</p>
      </div>
    </div>
  )
}

export default About