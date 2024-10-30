import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images from the assets folder


const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mb-8">
      <Slider {...settings}>
        <div>
          <img src="/flat-4.jpg" alt="Slide 1" className="w-full h-auto object-cover" />
        </div>
        <div>
          <img src="/flat-2.png" alt="Slide 2" className="w-full h-auto object-cover" />
        </div>
        <div>
          <img src="/flat-3.jpg" alt="Slide 3" className="w-full h-auto object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;

