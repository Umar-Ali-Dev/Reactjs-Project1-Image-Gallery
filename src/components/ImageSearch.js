import React, { useState } from 'react'
import { Link, redirect } from "react-router-dom";

const ImageSearch = ({ searchText }) => {
    const [text , setText] = useState('')
    console.log(text);

    const onSubmit= (e) => {
        e.preventDefault();
        searchText(text)
    }
     
  return (
    <div className='max-w-sm mx-auto my-10 overflow-hidden rounded'>
        <form onSubmit={onSubmit} className='w-full max-w-sm'>
            <div className="flex items-center py-2 border-b-2">
                <input onChange={ ele => setText(ele.target.value)} type="text" placeholder='enter your image term here' className='w-full px-2 py-1 leading-tight text-gray-700 bg-transparent border-none focus:outline-none ' />
                <button className='flex-shrink-0 px-2 py-1 text-white bg-teal-500 border-4 border-teal-500 rounded-lg hover:border-teal-700 hover:bg-teal-700'>
                    Search
                </button>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch