import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import dateFormat from "dateformat";
import { data } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { modalOnAction } from "../../store/actions/common.action";
import "./Carousel.scss";
import { layThongTinLichChieuPhim } from "../../store/actions/rapChieu.action";
import { useHistory } from "react-router-dom";
// let danhSachCumRap = [];
function Carousel() {
  const dispatch = useDispatch();
  const listMovie = useSelector((state) => state.movieReducer.listMovie);
  const [phim, setPhim] = useState("Phim");
  const [heThongRap, setHeThongRap] = useState("Hệ thống rạp");
  const [rap, setRap] = useState([]);
  const [suatChieu, setSuatChieu] = useState([]);
  const [cumRap, setCumRap] = useState("Rạp");
  const [suatChieuDangChon, setSuatChieuDangChon] = useState("Suất chiếu");
  const [maLichChieu, setMaLichChieu] = useState("");
  const listHeThongRapChieuPhim = useSelector(
    (state) => state.rapChieuReducer.cumRapChieuPhim.heThongRapChieu
  );
  const history = useHistory();
  // const [suatChieu, setSuatChieu] = useState([]);
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
  const handleClick = (type, data) => {
    switch (type) {
      case "CHON_PHIM":
        setPhim(data.tenPhim);
        dispatch(layThongTinLichChieuPhim(data.maPhim));
        setHeThongRap("Hệ thống rạp");
        setCumRap("Rạp");
        setSuatChieuDangChon("Suất chiếu");
        setSuatChieu([]);
        setRap([]);
        break;
      case "CHON_HT_RAP":
        setRap(data.cumRapChieu);
        setHeThongRap(data.tenHeThongRap);
        setCumRap("Rạp");
        setSuatChieuDangChon("Suất chiếu");
        setSuatChieu([]);
        // setRap([]);
        break;
      case "CHON_CUM_RAP":
        setCumRap(data.tenCumRap);
        setSuatChieu(data.lichChieuPhim);
        setSuatChieuDangChon("Suất chiếu");

        // console.log("lichchieu:", data.lichChieuPhim);
        break;
      case "CHON_SUAT_CHIEU":
        console.log(data.maLichChieu);
        setMaLichChieu(data.maLichChieu);
        setSuatChieuDangChon(
          data.tenRap +
            " - lúc " +
            dateFormat(data.ngayChieuGioChieu, "hh:mm ngày dd,mm,yyyy")
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="carousel">
      <Slider {...setting} className="carousel">
        {hangleRenderCarousel()}
      </Slider>
      <div className="homeTools d-flex align-items-center">
        {/* phim */}
        <div className="my-dropdown col-3">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {phim}
          </button>
          <div className="dropdown-menu fade" aria-labelledby="dropdownMenu2">
            {listMovie?.map((phim, index) => {
              return (
                <button
                  className="dropdown-item"
                  type="button"
                  key={index}
                  onClick={() => handleClick("CHON_PHIM", phim)}
                >
                  {phim.tenPhim}
                </button>
              );
            })}
          </div>
        </div>
        {/* hệ thống rạp */}
        <div className="my-dropdown col-3">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenu3"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {heThongRap}
          </button>
          <div className="dropdown-menu fade" aria-labelledby="dropdownMenu3">
            {listHeThongRapChieuPhim?.map((heThongRap, index) => {
              return (
                <button
                  className="dropdown-item"
                  type="button"
                  key={index}
                  onClick={() => handleClick("CHON_HT_RAP", heThongRap)}
                >
                  {heThongRap.tenHeThongRap}
                </button>
              );
              // console.log(heThongRap);
            })}
          </div>
        </div>
        {/* rạp */}
        <div className="my-dropdown col-2">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenu3"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {cumRap}
          </button>
          <div className="dropdown-menu fade" aria-labelledby="dropdownMenu3">
            {rap?.map((cumRap, index) => {
              return (
                <button
                  key={index}
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleClick("CHON_CUM_RAP", cumRap)}
                >
                  {cumRap.tenCumRap}
                </button>
              );
            })}
          </div>
        </div>
        {/* suất chiếu */}
        <div className="my-dropdown col-2">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenu4"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {suatChieuDangChon}
            {/* {suatChieu == [] ? suatChieu : "Suất chiếu"} */}
          </button>
          <div className="dropdown-menu fade" aria-labelledby="dropdownMenu4">
            {suatChieu?.map((suatChieuItem, index) => {
              return (
                <button
                  className="dropdown-item"
                  type="button"
                  key={index}
                  onClick={() => handleClick("CHON_SUAT_CHIEU", suatChieuItem)}
                >
                  {suatChieuItem.tenRap +
                    " - lúc " +
                    dateFormat(
                      suatChieuItem.ngayChieuGioChieu,
                      "hh:mm - ngày dd/mm/yyyy"
                    )}
                </button>
              );
            })}
          </div>
        </div>
        {/* mua vé */}
        <div className="my-dropdown col-2">
          <button
            className="muaVePhim"
            onClick={() => {
              history.push(`/dat-ve/${maLichChieu}`);
            }}
            disabled={
              phim !== "Phim" &&
              heThongRap !== "Hệ thống rạp" &&
              cumRap !== "Rạp" &&
              suatChieuDangChon !== "Suất chiếu"
                ? false
                : true
            }
            style={
              phim !== "Phim" &&
              heThongRap !== "Hệ thống rạp" &&
              cumRap !== "Rạp" &&
              suatChieuDangChon !== "Suất chiếu"
                ? { backgroundColor: "#fa5238" }
                : null
            }
          >
            mua vé ngay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
