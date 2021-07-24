import React from "react";
import { useSelector } from "react-redux";
import ListMovie from "../../components/ListMovie/ListMovie";
import Loading from "../../components/Loading/loading";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListMovieAction } from "../../store/actions/movie.action";
import MovieCard from "../../components/MovieCard/MovieCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";

import "./home.scss";
function HomePage() {
  const isLoading = useSelector((state) => state.commonReducer.isLoading);
  const dispatch = useDispatch();
  //   get data render ra giao diện
  useEffect(() => dispatch(getListMovieAction()), []);
  const listMovie = useSelector((state) => state.movieReducer.listMovie);
  console.log("Loading home: ", isLoading);
  // setting
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    slidesPerRow: 2,
    rows: 1,
    arrows: true,
    centerMode: true,
    centerPadding: -15,
  };

  // render danh sách phim
  const handleRenderDanhSachPhim = () => {
    return listMovie.map((movie, index) => {
      return (
        // <div className="col-12 col-sm-6 col-lg-3">
        <MovieCard key={index} movie={movie} />
        // </div>
      );
    });
  };
  return isLoading ? (
    <Loading />
  ) : (
    <Slider {...settings}>{handleRenderDanhSachPhim()}</Slider>
    // <div className="container">

    // </div>
  );
}

export default HomePage;
