import React from "react";
import { useDispatch } from "react-redux";

import { data } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { modalOnAction } from "../../store/actions/common.action";
import "./Carousel.scss";
function Carousel() {
  const dispatch = useDispatch();
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    width: 100,
    autoplaySpeed: 3000,
    autoplay: true,
  };

  const hangleRenderCarousel = () => {
    const getId = (url) => {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);

      return match && match[2].length === 11 ? match[2] : null;
    };
    return data.map((phim, index) => {
      let videoId = getId(phim.linkTrailer);
      return (
        <div className="itemCarousel col-12" key={index}>
          <img src={phim.img} alt="" className="imgCarousel img-fluid" />
          <div
            className="trailerMovie"
            onClick={() => dispatch(modalOnAction(videoId))}
          ></div>
        </div>
      );
    });
  };
  return (
    <div className="carousel">
      <Slider {...setting} className="carousel">
        {hangleRenderCarousel()}
      </Slider>
    </div>
  );
}

export default Carousel;
