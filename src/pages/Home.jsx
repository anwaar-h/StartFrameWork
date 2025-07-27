import React from 'react'
import img from "../assets/avataaars.svg"

export default function Home() {
  return (
    <>
    <div className="home d-flex align-items-center justify-content-center flex-column w-100 text-white">
                <img src={img} alt="image" className='image mx-2' />
                <h1 className='fw-bold my-3 text-uppercase' >start Framework</h1>
                <div className='star-cont d-flex justify-content-center align-items-center'>
                    <i className="fa-solid fa-star"></i>
                </div>
                <p className='m-3'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </>
  )
}
