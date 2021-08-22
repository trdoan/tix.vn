import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailMovieAction } from "../../store/actions/movie.action";
import Loading from "./../../components/Loading/Loading";
import Footer from "./../../components/Footer/Footer.component";
import dateFormat from "dateformat";

import "./MovieDetail.scss";

import RapChieu from "../../components/RapChieu/RapChieu";

function MovieDetail() {
  const { maPhim } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailMovieAction(maPhim));
  }, [dispatch, maPhim]);
  // test cm
  const movieDetail = useSelector((state) => state.movieReducer.movieDetail);
  const isLoading = useSelector((state) => state.commonReducer.isLoading);
  const { tenPhim, trailer, hinhAnh, ngayKhoiChieu, lichChieu, danhGia } =
    movieDetail;

  // lấy thông tin chi tiết phim lịch chiếu,...

  if (lichChieu) {
    var { thoiLuong } = movieDetail.lichChieu[0];
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="chiTietPhim" id="chiTietPhim">
        <div className="row tongQuat">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6 col-xs-4 filmPosterTop">
                <div className="row justify-content-center">
                  <img
                    className="img-fluid"
                    alt="posterMovie"
                    src={hinhAnh ? hinhAnh.replace("http", "https") : null}
                  />
                </div>
              </div>
              <div className="col-sm-6 infoMain">
                <p className="tenPhim">
                  <span className="typeMovie">C18</span> {tenPhim}
                </p>
                <p className="danhGia">
                  Thời lượng: {thoiLuong} Phút - {danhGia} iMDb
                </p>
                <p>Khởi chiếu: {dateFormat(ngayKhoiChieu, "dd/mm/yyyy")}</p>
                <p>Định dạng: 2D/Digital</p>
                <p>Ngôn ngữ: Phụ đề tiếng Việt</p>
                <div className="buttonGroup">
                  <button className="btn ">
                    <a href={trailer} target="_blank" rel="noreferrer">
                      Trailer
                    </a>
                  </button>
                  <button className="btn ">
                    <a href="#">Đặt vé</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BUG */}
        <RapChieu />
      </div>
      <Footer />
    </>
  );
}

export default React.memo(MovieDetail);
