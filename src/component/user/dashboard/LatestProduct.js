import React from "react";
import Slider from "react-slick";


const LatestProduct = ({data,title}) => {

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
  };

  return (
    <div className=" py-3  bg-opacity-55 backdrop-blur-3xl">
      <h1 className=" font-varela text-xl text-red-600">{title}</h1>
     
      <div className=" max-w-[1000px] mx-auto">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div key={item.id}>
              <div className=' flex justify-center items-center'>
                    <img src={item.image} alt="clothe" className=" h-28"/>
                    </div>
                <h1 className=" text-center  font-varela">
                  {item.name}
                </h1>
                
                <div className=" flex justify-center pt-2" >
                  
                </div>
              </div>
            );
          })}
        </Slider>
        
      </div>
    
    </div>
  );
};

export default LatestProduct;