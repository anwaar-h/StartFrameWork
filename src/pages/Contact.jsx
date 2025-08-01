import React from 'react'
import Input from '../components/Input.jsx'
export default function Contact() {
  return (
    <div className='contact d-flex align-items-center justify-content-center flex-column w-100 mb-5 '>
        <h1 className='fw-bold my-3 pt-4 text-uppercase blue-txt'>conatct section</h1>
        <div className='star-cont blue-star d-flex justify-content-center align-items-center mb-3'>
            <i className="fa-solid fa-star"></i>
        </div>
        <div className='d-flex flex-column justify-content-center w-50 mb-3 gap-3 '>
                <Input type={"text"} label={"User Name"} id={'name'} />
                <Input type={"text"} label={"User Age"} id={'age'} />
                <Input type={"email"} label={"User Email"} id={'email'} />
                <Input type={"password"} label={"User Password"} id={'password'} />
        <button type='submit' className='btn form-btn'>Send Message</button>
        </div>
    </div>
  )
}
