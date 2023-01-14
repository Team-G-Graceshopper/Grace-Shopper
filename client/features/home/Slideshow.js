import React, { useState } from 'react';
import './home.css'

const Slideshow = () => {


  const imageArray = [
    "/wallpaper/cutepets.jpeg",
    "/wallpaper/kittens.jpeg",
    "/wallpaper/puppies.jpeg",
    
  ]
  const [currentSlide, setSlide] = useState(0)


  const prevSlide = () =>{
    setSlide(currentSlide === 0 ? 2: currentSlide -1 )
  }
  

  setTimeout(()=>{ prevSlide()}, 4000);

  

    return (
      <div className="slideshow">
        <div className="container" >
          <img src={imageArray[currentSlide]}  />
        </div>
        
      </div>
    );
};

export default Slideshow;