import React from "react";
import Slider from "react-slick";


const Carousal = ({data,title}) => {

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    autoplay:true,
  };

  return (
    <div className=" py-3  bg-opacity-55 backdrop-blur-3xl">
      <h1 className=" font-varela text-xl text-red-600">{title}</h1>
     
      <div className=" max-w-[1000px] mx-auto">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div key={item.id}>
              <div className=' flex justify-center items-center opacity-65 backdrop-blur-md'
               style={{
                        backgroundImage:`url('${item.image}')`,
                        backgroundSize:"cover",
                        backgroundRepeat:"no-repeat",
                        backgroundPosition:"center",
                        minHeight:"150px",

                    }}>
                    <img src={item.image} alt="clothe" className=" h-[180px] opacity-95"/>
                    </div>
              </div>
            );
          })}
        </Slider>
        
      </div>
    
    </div>
  );
};

export default Carousal;