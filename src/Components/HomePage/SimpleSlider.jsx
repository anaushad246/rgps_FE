import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const imageUrls = [
  {
    url: 'pdf1_page-0001.jpg',
    alt: 'Students raising hands in classroom',
    link: '(link unavailable)',
  },
  {
    url: 'pdf1_page-0002.jpg',
    alt: 'School kids in classroom',
    link: '(link unavailable)',
  },
  {
    url: 'https://media.istockphoto.com/id/860597978/photo/group-of-school-kids-raising-hands-in-classroom.jpg?s=1024x1024&w=is&k=20&c=6O-LJOWFRg47u2r9ZrMjI9k0yvt0hk9X66Hq9Bsh_Sc=',
    alt: 'Group of school kids raising hands',
    link: '(link unavailable)',
  },
];

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full flex flex-col items-center bg-gray-50 py-12">
      <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        Rabia Girls Public School Managed by Tahir Hussain Educational Welfare Trust
      </h1>
      <div className="w-full max-w-4xl">
        <Slider {...settings} className="rounded-lg shadow-lg overflow-hidden">
          {imageUrls.map((image, index) => (
            <div key={index} className="w-full h-fit h-max-[700px] ">
              <a href={image.link} target="_blank" rel="noreferrer">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-fill"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SimpleSlider;
