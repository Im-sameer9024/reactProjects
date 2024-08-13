import React from 'react'
import Slider from "react-slick";
import slide1 from '../assets/img/carousel-1.jpg'
import slide2 from '../assets/img/carousel-2.jpg'
import slide3 from '../assets/img/slider1.jpg'
import slide4 from '../assets/img/slider2.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FadeSlider() {

  const slides = [{ url: slide1 }, { url: slide2 }, { url: slide3 }, { url: slide4 }]

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <div className="slider-container w-full">
      <Slider {...settings}>
        {
          slides.map(({ url }) => {
            return (
              <div>
                <img src={url} alt="img" className=' w-full h-[50vh] md:h-[80vh] rounded-xl shadow-2xl object-cover' />
                <div className=' w-full h-full bg-black absolute top-0 rounded-xl bg-opacity-55'>
                  <div className='md:w-6/12 my w-full flex flex-col px-4 h-full gap-4 justify-center'>
                    <h3 className=" text-[0.5rem] md:text-[1rem] lg:text-[1.5rem] font-bold text-sky-300 shadow-2xl">
                      BEST ONLINE COURSES
                    </h3>
                    <h1 className=" text-[1rem] md:text-[1.5rem] font-smallHeading lg:text-[2rem]">
                      The Best Online Learning Platform
                    </h1>
                    <p className=" font-content text-[1rem] md:text-[1.3rem]">
                      StudyNotion is the ultimate learning platform, offering a seamless
                      blend of engaging content, interactive tools, and a supportive
                      community to elevate your educational journey.
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}
