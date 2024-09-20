import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';

const LocatorPanel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://img.freepik.com/free-photo/girl-hearing-ridiculous-stupid-question-careless-unbothered-cute-redhead-woman-yellow-sweater_1258-126189.jpg?w=1380&t=st=1724133573~exp=1724134173~hmac=ed3e96c75905c42ace97935c333c21b2d77e51829470062d05759b86d2277af0",
    "https://img.freepik.com/free-photo/travel-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-wtih-trendy-hat-sunglas_1258-118765.jpg?w=1380&t=st=1724133606~exp=1724134206~hmac=1c7a2db129488c1b449b1058104b3d22cdbb09617dd641354341954684e3a56a",
    "https://img.freepik.com/free-photo/business-concept-close-up-portrait-young-beautiful-attractive-ginger-red-hair-girl-smiling-showing-b_1258-124915.jpg?w=1380&t=st=1724133648~exp=1724134248~hmac=6c0ec6d7b2dc20287c9787cd2089627016cb61493e0fdc5f79fc4d70ca895127"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      {/* Slider Section */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <div style={{ display: 'flex', transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: 'auto' }}
            />
          ))}
        </div>
        {/* Navigation Buttons */}
        <button style={navButtonStyle} onClick={prevSlide}>❮</button>
        <button style={{ ...navButtonStyle, right: 0 }} onClick={nextSlide}>❯</button>
      </div>

      {/* Content Section */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#333' }}>Welcome to Our Website</h1>
        <p style={{ color: '#555', lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae suscipit mi.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <img
            src="https://images.unsplash.com/photo-1554941071-8ec75d5379b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNsaWRlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Feature 1"
            style={{ width: '300px', height: '200px', objectFit: 'cover' }}
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1674641194949-e154719cdc02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xpZGVyfGVufDB8fDB8fHww"
            alt="Feature 2"
            style={{ width: '300px', height: '200px', objectFit: 'cover' }}
          />
          <img
            src="https://store.storeimages.cdn-apple.com/2/store.apple.com/shop/rs-covers/2/dist/media/aos_cover_vibrant.mp4"
            alt="Feature 3"
            style={{ width: '300px', height: '200px', objectFit: 'cover' }}
          />
        </div>
      </div>
      <Dashboard/>
    </div>
  );
}

const navButtonStyle = {
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  left: 0,
};

export default LocatorPanel;
