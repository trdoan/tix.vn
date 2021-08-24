import React from "react";
import { useSelector } from "react-redux";

import Loading from "./../../components/Loading/Loading.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getListMovieAction,
  getListMovieAction2,
} from "../../store/actions/movie.action";

import ModalVideo from "react-modal-video";

import Footer from "../../components/Footer/Footer.component";
import { modalOffAction } from "../../store/actions/common.action";
import Carousel from "../../components/Carousel/Carousel";
import "./home.scss";
import ListMovie from "../../components/ListMovie/ListMovie";
import MobileApp from "../../components/MobileApp/MobileApp";
import RapChieu from "./../../components/RapChieu/RapChieu";
function HomePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.commonReducer.isLoading);
  //
  const isModal = useSelector((state) => state.commonReducer.isModal);
  const videoId = useSelector((state) => state.commonReducer.videoModalId);
  //   get data render ra giao diện
  useEffect(() => dispatch(getListMovieAction()), [dispatch]);
  useEffect(() => dispatch(getListMovieAction2()), [dispatch]);
  // console.log(maNhomPhim);
  console.log("isLoading:  ", isLoading);
  // xử lý modal

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {console.log("RENDER HOME PAGE")}

      <Carousel />
      <ListMovie />
      <div className="container">
        <RapChieu />
      </div>
      <MobileApp />
      <Footer />
      {isModal ? (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isModal}
          videoId={videoId}
          onClose={() => dispatch(modalOffAction())}
        />
      ) : null}
    </>
  );
}

export default React.memo(HomePage);
