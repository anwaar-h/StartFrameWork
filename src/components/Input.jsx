import React, { useState } from 'react'
export default function Input({type,label,id}) {
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue);
    
  return (
    <div className='d-flex flex-column align-items-start position-relative'>
        <label className={`${inputValue ? "move-label" : ""} transition position-absolute`} htmlFor={id}>{label}:</label>
        <input 
                type={type} 
                placeholder={inputValue ? "" : label} 
                onChange={(e) => setInputValue(e.target.value)} 
                value={inputValue}
                name={id} 
                id={id} 
                className='w-100 mx-0'
            />
    </div>
  )
}
