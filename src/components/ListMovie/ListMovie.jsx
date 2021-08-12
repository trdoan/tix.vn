import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { thayDoiDanhSachPhimAction } from "../../store/actions/common.action";
import MovieCard from "../../components/MovieCard/MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./ListMovie.scss";
function ListMovie() {
  const dispatch = useDispatch();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    slidesPerRow: 2,
    arrows: true,
  };
  const listMovie = useSelector((state) => state.movieReducer.listMovie);

  const handleSelectListMovie = (e) => {
    dispatch(thayDoiDanhSachPhimAction());
  };
  // render danh sách phim
  const handleRenderDanhSachPhim = () => {
    return listMovie.map((movie, index) => {
      return <MovieCard key={index} movie={movie} />;
    });
  };

  return (
    <div className="danhSachPhim">
      <div className="menuDanhSachPhim d-flex justify-content-center align-items-center">
        <div onClick={(e) => handleSelectListMovie(e)}>Đang Chiếu</div>
        <div onClick={(e) => handleSelectListMovie(e)}>Sắp Chiếu</div>
      </div>
      <div className="row">
        <div className="container">
          <Slider {...settings}>{handleRenderDanhSachPhim()}</Slider>
        </div>
      </div>
    </div>
  );
}

export default ListMovie;
