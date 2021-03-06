import React from "react";

import { useSelector } from "react-redux";

import MovieCard from "../../components/MovieCard/MovieCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./ListMovie.scss";

function ListMovie() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    slidesPerRow: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  const listMovie = useSelector((state) => state.movieReducer.listMovie);
  const listMovie2 = useSelector((state) => state.movieReducer.listMovie2);

  // render danh sách phim
  const handleRenderDanhSachPhim = (loaiChieu) => {
    if (loaiChieu === true) {
      return listMovie.map((movie, index) => {
        return <MovieCard key={index} movie={movie} loaiChieu={loaiChieu} />;
      });
    } else {
      return listMovie2.map((movie, index) => {
        return <MovieCard key={index} movie={movie} loaiChieu={loaiChieu} />;
      });
    }
  };

  return (
    <div className="danhSachPhim" id="danhSachPhim">
      <div className="container">
        <ul className="nav nav-tabs menuDanhSachPhim" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active itemDanhSachPhim"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Đang chiếu
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link itemDanhSachPhim"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Sắp chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <Slider {...settings}>{handleRenderDanhSachPhim(true)}</Slider>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <Slider {...settings}>{handleRenderDanhSachPhim(false)}</Slider>
            {/* <div className="movieCardMobile">
              {handleRenderDanhSachPhim(false)}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMovie;
