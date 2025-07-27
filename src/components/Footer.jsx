import React from 'react'

export default function Footer() {
    return (
    <footer className='footer text-center text-white py-5'>
        <div className="container">
            <div className="row">
                <div className="col-md-4 py-5">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 py-5">
                    <h3>AROUND THE WEB</h3>
                    <ul className="social-icons list-unstyled d-flex flex-row gap-3 justify-content-center align-items-center">
                        <i className="fa-brands fa-facebook rounded-circle text-white"></i>
                        <i className="fa-brands fa-twitter rounded-circle text-white"></i>
                        <i className="fa-brands fa-linkedin rounded-circle text-white"></i>
                        <i className="fa-solid fa-globe rounded-circle text-white"></i>
                    </ul>
                </div>
                <div className="col-md-4 py-5">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
                <div className="dark-footer w-100 p-4">
                    <p className='m-0'>Copyright © Your Website 2021</p>
                </div>
    </footer>
  )
}
