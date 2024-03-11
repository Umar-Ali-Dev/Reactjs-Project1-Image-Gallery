import React from 'react'


const ImageCard = ({image}) => {

    const tags = image.tags.split(',');
    
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
 
    <img src={image.webformatURL} alt="" className='w-full ' />
    {/* <img src="https://source.unsplash.com/random" alt="" /> */}
    <div className="px-6 py-4">
      <div className="mb-2 text-xl font-bold text-purple-500">
        photo from {image.user}
      </div>
      <ul>
        <li>
          <strong>views :</strong>
          {image.views}
        </li>
        <li>
          <strong>Download :</strong>
          {image.downloads}
        </li>
        <li>
          <strong>Likes :</strong>
          {image.likes}
        </li>

      </ul>
    </div>
    <div className="px-6 py-4">
      {
        tags.map( (tag, index) => (
            <span key={index}  className="px-3 py-1 mr-2 text-sm text-gray-800 bg-gray-200 rounded-md">
        #{tag}
      </span>
        ))
      }
    </div>
  </div>
  )
}

export default ImageCard