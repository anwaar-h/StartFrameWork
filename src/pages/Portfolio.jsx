import React, { useState } from 'react'
import img1 from '../assets/poert1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'
let allImages =[img1,img2,img3,img1,img2,img3]
export default function Portfolio() {
    
    const [modal, setmodal] = useState(false)
    const [currentImg , setCurrentImg ] = useState(null)
    function handleCloseImg(e){
        console.log(e.target.tagName)
        if(e.target.tagName !== "IMG"){
            setmodal(false)
        }
    }

  return (
    <div className='portfolio d-flex align-items-center justify-content-center flex-column w-100 px-5 text-white'>
        <h1 className='fw-bold my-3 pt-4 text-uppercase blue-txt'>portfolio component</h1>
        <div className='star-cont blue-star d-flex justify-content-center align-items-center mb-3'>
                    <i className="fa-solid fa-star"></i>
        </div>
        <div className="row mb-4 g-5 px-4">
            {allImages.map((item,index)=><div key={index} className="col-md-4">
                <div onClick={()=>{setmodal(true) , setCurrentImg(item)}} className='img-cont'>
                    <img src={item} className='w-100 rounded' alt="image" />
                    <div className='layer rounded '>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
        </div>)} 
    </div>
    
    {modal?<div onClick={(e)=>handleCloseImg(e)} className='modal position-fixed d-flex justify-content-center align-items-center top-0
    start-0 bottom-0 end-0 bg-black bg-opacity-50 '>
        <img src={currentImg} className='layer-img rounded' alt="image" />
    </div>
    :""}

    </div> 
  )
}

