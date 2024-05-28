import React from 'react';
import image1 from "../../assets/banner/women.png";
import image2 from "../../assets/banner/couple.png";
import image3 from "../../assets/banner/discount.png";
import image4 from "../../assets/banner/child.png";
import Slider from 'react-slick';

const images = [
  {
    id: 1,
    name: image1,
    title: "Upto 50% discount on all men's wear",
    description: ""
  },
  {
    id: 2,
    name: image2,
    title: "30% off on all women's wear",
    description: ""
  },
  {
    id: 3,
    name: image3,
    title: "70% off on all product sale",
    description: ""
  },
  {
    id: 4,
    name: image4,
    title: "30% off on all women's wear",
    description: ""
  }
]
const Banner = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoPlay: 2,
    autoplay: true,
    autoPlaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true
  }

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center item-center dark:bg-gray-950 dark:text-white duration-200'>
      {/* Background pattern */}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'>

      </div>
      {/* Hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {
           images.map((data)=>(
            <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              {/* text content */}
              <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                <h1 className='text-xl sm:text-3xl lg:text-7xl font-bold'>
                 {data.title}
                </h1>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis alias molestiae libero dolorem vel exercitationem eligendi culpa ad, labore, voluptatem magni assumenda nam adipisci eaque obcaecati voluptates asperiores velit temporibus?
                </p>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    order now
                  </button>
                </div>
              </div>
              {/* img section */}
              <div className='order-1 sm:order-2'>
                <div className='relative z-10'>
                  <img src={data.name} alt="" className='h-[300px] mt-10 w-[300px] sm:h-[450px] w-[450px] sm:scale-125 object-contain' />
                </div>
              </div>
            </div>


          </div>
           ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default Banner;