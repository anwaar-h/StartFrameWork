import React from 'react'


export default function About() {
  return (
    <div className='about d-flex align-items-center justify-content-center flex-column p-5 w-100 text-white'>
        <h1 className='fw-bold my-3 pt-4 text-uppercase'>about component</h1>
        <div className='star-cont d-flex justify-content-center align-items-center mb-3'>
                    <i className="fa-solid fa-star"></i>
        </div>
        <div className='container p-3'>
            <div className="row px-5 text-start">
                <div className="col-md-6 ps-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6 pe-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
