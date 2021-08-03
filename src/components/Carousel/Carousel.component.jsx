import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import { data } from "./data";
function Carousel() {
  console.log(data);
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  const renderItemCarousel = () => {
    return data.map((phim, index) => {
      return (
        <div>
          <h1>{phim.name}</h1>
          <p>{phim.moTa}</p>
        </div>
      );
    });
  };
  return (
    <div className="movieTrailer" style={{ height: 420 }}>
      <Slider {...settings2} className="movieTrailer--slick">
        {renderItemCarousel}
      </Slider>
    </div>
  );
}

export default Carousel;
