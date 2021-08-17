import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getDetailMovieAction } from "../../store/actions/movie.action";
import Loading from "./../../components/Loading/loading";
import Footer from "./../../components/Footer/Footer.component";
import dateFormat from "dateformat";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import "./MovieDetail.scss";
function MovieDetail() {
  const { maPhim } = useParams();
  const dispatch = useDispatch();
  // const history = useHistory();

  const movieDetail = useSelector((state) => state.movieReducer.movieDetail);
  const isLoading = useSelector((state) => state.commonReducer.isLoading);
  useEffect(() => {
    dispatch(getDetailMovieAction(maPhim));
  }, []);
  const { tenPhim, hinhAnh, moTa, ngayKhoiChieu, lichChieu, danhGia } =
    movieDetail;
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
              <div className="col-sm-3 col-xs-4 filmPosterTop">
                <div className="row justify-content-center">
                  <img className="img-fluid" src={hinhAnh} />
                </div>
              </div>
              <div className="col-sm-5 infoMain">
                <p>{dateFormat(ngayKhoiChieu, "dd/mm/yyyy")}</p>
                <p className="tenPhim">
                  <span className="typeMovie">C18</span> {tenPhim}
                </p>
                <p className="danhGia">
                  {thoiLuong} Phút - {danhGia} iMDb
                </p>
              </div>
              <div className="col-sm-2 circleStar ng-scope"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MovieDetail;
