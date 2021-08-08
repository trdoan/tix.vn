import React, { useState } from "react";
import { useSelector } from "react-redux";
// import ListMovie from "../../components/ListMovie/ListMovie";
import Loading from "../../components/Loading/loading";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getDetailMovieAction,
  getListMovieAction,
} from "../../store/actions/movie.action";
import MovieCard from "../../components/MovieCard/MovieCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import { data } from "./../../components/Carousel/data";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import "./home.scss";
import Footer from "../../components/Footer/Footer.component";
import {
  modalOffAction,
  modalOnAction,
  thayDoiDanhSachPhimAction,
} from "../../store/actions/common.action";

function HomePage() {
  const isLoading = useSelector((state) => state.commonReducer.isLoading);
  const maNhomMovieList = useSelector(
    (state) => state.commonReducer.maNhomMovieList
  );
  const maNhomPhim = maNhomMovieList ? "GP07" : "GP08";
  console.log(maNhomPhim);
  const dispatch = useDispatch();
  //   get data render ra giao diện
  useEffect(() => dispatch(getListMovieAction(maNhomPhim)), [maNhomPhim]);
  const listMovie = useSelector((state) => state.movieReducer.listMovie);
  console.log("isLoading:  ", isLoading);
  // const [isOpen, setOpen] = useState(false);
  // setting
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    slidesPerRow: 2,
    arrows: true,
  };
  const settings2 = {
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
  const isModal = useSelector((state) => state.commonReducer.isModal);
  const videoId = useSelector((state) => state.commonReducer.videoModalId);
  // render danh sách phim
  const handleRenderDanhSachPhim = () => {
    return listMovie.map((movie, index) => {
      return (
        <MovieCard key={index} movie={movie} />
        // </div>
      );
    });
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
        <div className="itemCarousel">
          <img src={phim.img} alt="" className="imgCarousel" />
          <div
            className="trailerMovie"
            onClick={() => dispatch(modalOnAction(videoId))}
          ></div>
        </div>
      );
    });
  };
  const handleSelectListMovie = (e) => {
    const selection = e.target;
    // const selectList = document.getElementsByClassName("itemMenuDanhSachPhim");
    // var currentActive = document.getElementsByClassName("active");
    // // console.log("currentActive ", currentActive);
    // currentActive[0].className = currentActive[0].className.replace(
    //   " active",
    //   ""
    // );
    // selection.className += " active";
    dispatch(thayDoiDanhSachPhimAction());
  };
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {console.log("RENDER HOME PAGE")}
      <React.Fragment>
        <div className="carousel">
          <Slider {...settings2} className="carousel">
            {hangleRenderCarousel()}
          </Slider>
        </div>

        <div className="danhSachPhim">
          <div className="menuDanhSachPhim d-flex justify-content-center align-items-center">
            <div
              className={
                maNhomMovieList
                  ? "itemMenuDanhSachPhim itemDangChieu active"
                  : "itemMenuDanhSachPhim itemDangChieu "
              }
              onClick={(e) => handleSelectListMovie(e)}
            >
              Đang Chiếu
            </div>
            <div
              className={
                !maNhomMovieList
                  ? "itemMenuDanhSachPhim itemSapChieu active"
                  : "itemMenuDanhSachPhim itemSapChieu"
              }
              onClick={(e) => handleSelectListMovie(e)}
            >
              Sắp Chiếu
            </div>
          </div>
          <div className="row">
            <div className="container">
              <Slider {...settings}>{handleRenderDanhSachPhim()}</Slider>
            </div>
          </div>
        </div>

        <Footer />
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isModal}
          videoId={videoId}
          onClose={() => dispatch(modalOffAction())}
        />
      </React.Fragment>
    </>
  );
}

export default React.memo(HomePage);
