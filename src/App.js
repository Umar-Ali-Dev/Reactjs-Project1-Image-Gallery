import './App.css';
import React, { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginForm'

//abc

function App() {
  const [images , setImages] = useState([])
  const [isLoading , setIsLoading] = useState(true)
  const[term , setTerm ] = useState('')

  useEffect( () => {
    fetch(`https://pixabay.com/api/?key=41705704-fbdd982e33613c9fd7c72654d&q=${term}&image_type=photo&pretty=true`)
    .then( res => res.json())
    .then(data => {
          setImages(data.hits);
          setIsLoading(false);
        })
    .catch(err => console.log(err))
  },[term])

  return (
    <div className="container w-11/12 mx-auto ">
      <ImageSearch searchText={(element) => setTerm(element)}/>


      {
        !isLoading && images.length === 0 && <h1 className="w-3/12 mx-auto mt-32 text-4xl text-bold">no image found...</h1> 
      }
      
      {isLoading ?  <h1 className="mx-auto mt-32 text-4xl w-44 text-bold">Loading ...</h1> : <div className="grid grid-cols-3 gap-4 ">
        {
          images.map( image => (
            <ImageCard key={image.id} image={image}/>  
          ))
        }
      
      </div>
      }
    </div>
  );
}

export default App;
