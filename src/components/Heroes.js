import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SlCalender } from "react-icons/sl";
// import './Carousel.css'

function Heroes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };


  const slides = [
    {
      src:'https://source.unsplash.com/1600x400/? Event',
      caption:"jhgdsfuigu8idsf",
      content:"hyjfduigiodfshgiohd"
    },
    {
      src:'https://source.unsplash.com/1600x400/? weddings , management',

    
    },
    {
      src:'https://source.unsplash.com/1600x400/? meetings',
      caption:"jhgdsfuigu8idsf",
      content:"hyjfduigiodfshgiohd"
    },
  ]


  return (
    <div>
        <div className='ContainerforCarouselSection'>
        <div className='carouselContainer'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={index === activeIndex ? 'active' : ''}
              aria-current={index === activeIndex ? 'true' : 'false'}
            ></button>
          ))}
        </div>



        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img src={slide.src} className="d-block w-60 carouselImage" alt={`Slide ${index + 1}`} />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={{mixBlendMode: 'normal',fontSize:'2vw'}}>Elevate Your Event Experience</h5>
                <div>
                <button className='letsTalkBtn'>
  Let's Talk
  <div className="star-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      style={{shapeRendering:'geometricPrecision',textRendering:'geometricPrecision', imageRendering:'optimizeQuality',fillRule:'evenodd', clipRule:'evenodd'}}
      viewBox="0 0 784.11 815.53"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          className="fil0"
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </g>
    </svg>
  </div>
  <div className="star-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      style={{shapeRendering:'geometricPrecision',textRendering:'geometricPrecision', imageRendering:'optimizeQuality',fillRule:'evenodd', clipRule:'evenodd'}}
      viewBox="0 0 784.11 815.53"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          className="fil0"
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </g>
    </svg>
  </div>
  <div className="star-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      style={{shapeRendering:'geometricPrecision',textRendering:'geometricPrecision', imageRendering:'optimizeQuality',fillRule:'evenodd', clipRule:'evenodd'}}
      viewBox="0 0 784.11 815.53"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          className="fil0"
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </g>
    </svg>
  </div>
  <div className="star-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      style={{shapeRendering:'geometricPrecision',textRendering:'geometricPrecision', imageRendering:'optimizeQuality',fillRule:'evenodd', clipRule:'evenodd'}}
      viewBox="0 0 784.11 815.53"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          className="fil0"
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </g>
    </svg>
  </div>
  <div className="star-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      style={{shapeRendering:'geometricPrecision',textRendering:'geometricPrecision', imageRendering:'optimizeQuality',fillRule:'evenodd', clipRule:'evenodd'}}
      viewBox="0 0 784.11 815.53"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          className="fil0"
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </g>
    </svg>
  </div>
  <div className="star-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      style={{shapeRendering:'geometricPrecision',textRendering:'geometricPrecision', imageRendering:'optimizeQuality',fillRule:'evenodd', clipRule:'evenodd'}}
      viewBox="0 0 784.11 815.53"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          className="fil0"
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </g>
    </svg>
  </div>
</button>

                </div>
           
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
     
      
      </div>
    </div>
  );
}

export default Heroes;
