import React from 'react'

function ImageCard({image}) {
  const tags = image.tags.split(',');
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">

    <img className="rounded-t-lg" src={image.webformatURL} alt="" />

<div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Photographer:{image.user}</h5>
    
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">views: {image.views/1000}K</p> 
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Likes: {image.likes}</p>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Coments: {image.comments}</p>
    {tags.map((tag,i)=>{
    return <span key={i} className=" bg-gray-300 m-1 rounded-lg p-1">#{tag}</span>
    })}
   
    </div>
    </div>
  )
}

export default ImageCard