import React from 'react';
import NewsCutting from './Newscutting.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TrustNewsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          swipeToSlide: true,
        }
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">News Cuttings</h2>
      <Slider {...settings}>
        {NewsCutting.map((news, index) => (
          <div key={index} className=" border border-gray-200 rounded shadow-md bg-white ">
            <div><img src={news.image} alt={news.title} className="w-full h-52" /> </div>
            <div className=" w-full  p-4 text-center">
              <h2 className="text-xl font-bold">{news.title}</h2>
              <p className="text-sm">Date: {news.date}</p>
              <p className="text-sm">Source: {news.source}</p>
            </div>
    
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TrustNewsSlider;
