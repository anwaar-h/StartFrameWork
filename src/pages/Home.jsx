import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="home">
        <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img src="./src/assets/avataaars.svg" alt="image" />
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
