import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailMovieAction } from "../../store/actions/movie.action";
import Loading from "./../../components/Loading/Loading";
import Footer from "./../../components/Footer/Footer.component";
import dateFormat from "dateformat";

import "./MovieDetail.scss";
import {
  getListHeThongRapAction,
  getThongTinCumRap,
} from "../../store/actions/rapChieu.action";
// import rapBHD from "./../../img/bhdrap.png";
// import rapCNS from "./../../img/cnsrap.jpg";
// import rapGalaxy from "./../../img/galaxyrap.jpg";
// import rapCGV from "./../../img/cgvrap.jpg";
// import rapLotte from "./../../img/lotteRap.jpg";
// import rapMega from "./../../img/megarap.jpg";

function MovieDetail() {
  const { maPhim } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailMovieAction(maPhim));
  }, [dispatch, maPhim]);
  useEffect(() => {
    dispatch(getListHeThongRapAction());
  }, [dispatch]);
  const movieDetail = useSelector((state) => state.movieReducer.movieDetail);
  const isLoading = useSelector((state) => state.commonReducer.isLoading);
  const { tenPhim, trailer, hinhAnh, ngayKhoiChieu, lichChieu, danhGia } =
    movieDetail;
  const heThongRap = useSelector((state) => state.rapChieuReducer.heThongRap);
  const cumRap = useSelector((state) => state.rapChieuReducer.cumRap);
  // lấy thông tin chi tiết phim lịch chiếu,...

  if (lichChieu) {
    var { thoiLuong } = movieDetail.lichChieu[0];
  }

  const handleChonRap = (rapPhim) => {
    dispatch(getThongTinCumRap(rapPhim.maHeThongRap));
  };
  const handleRenderNavHeader = () => {
    return heThongRap?.map((rapPhim, index) => {
      return (
        <a
          key={index}
          className={"nav-link d-flex align-items-center "}
          data-toggle="pill"
          href={`#${rapPhim.biDanh}`}
          role="tab"
          aria-controls={rapPhim.biDanh}
          aria-selected="true"
          onClick={() => handleChonRap(rapPhim)}
        >
          <img
            src={rapPhim.logo}
            alt={rapPhim.tenHeThongRap}
            style={{ width: 45, height: 45 }}
          />
        </a>
      );
    });
  };
  const handleRenderNavContent = () => {
    return cumRap?.map((rap, index) => (
      <a
        key={index}
        href="#"
        className={
          index === 0
            ? "nav-link tab-pane fade show  d-flex active"
            : "nav-link tab-pane fade show d-flex"
        }
        data-toggle="pill"
        role="tab"
        aria-controls="#"
        aria-selected="true"
        style={{ cursor: "pointer" }}
      >
        <img
          // src={imgRap}
          alt=""
          style={{ width: 95, height: 100, objectFit: "cover" }}
        />
        <div className="content">
          <p> {rap.tenCumRap} </p>
          <p>{rap.diaChi}</p>
          <a href="#" style={{ color: "black" }}>
            Chi tiết
          </a>
        </div>
      </a>
    ));
  };

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
        <div className="heThongRap">
          <div className="row">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {handleRenderNavHeader()}
            </div>
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab-2"
              role="tablist"
              aria-orientation="vertical"
            >
              {handleRenderNavContent()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default React.memo(MovieDetail);
