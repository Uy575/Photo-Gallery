import React from 'react';
import './App.css';
import ImageCard from './component/ImageCard';
import { useState,useEffect } from 'react';
import SearchImage from './component/SearchImage';
function App() {
  
  const [isloading,setIsloading] = useState(true);
  const [term,setTerm] = useState('');
  const [images,setImages] = useState([])

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=32894252-07f45f15911eaf7ec4d5af072&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data=> setImages(data.hits))
    .catch(err=>console.log(err))
    setIsloading(false)

  },[term])


  return (
    <>
      <SearchImage searchValue = {(value)=>{
        setTerm(value)
      }}/>
      {isloading? <h1 className='text-center mx-auto mt-32 text-5xl'>Loading...</h1> :
      <div className='container grid grid-cols-3 gap-2 m-auto'>
      {images.map((img)=>{
        return <ImageCard image = {img} key={img.id}/>
      })}
      </div>
}
      </>
  );
}

export default App;
