import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layThongTinPhongVe } from "../../store/actions/phongVe.action";
// import WeekendIcon from "@material-ui/icons/Weekend";
import WeekendIcon from "@material-ui/icons/Weekend";
import Loading from "./../../components/Loading/Loading.component";
import { Divider } from "@material-ui/core";
import Error from "./../error/Error";
import Footer from "./../../components/Footer/Footer.component";
import "./Booking.scss";
function Booking() {
  // const renderChair = () => {
  //   return <WeekendIcon style={{ color: "orange" }} />;
  // };
  const { maLichChieu } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.commonReducer.isLoading);

  useEffect(() => {
    dispatch(layThongTinPhongVe(maLichChieu));
  }, []);
  const danhSachGhe = useSelector(
    (state) => state.phongVeReducer.thongTinPhongVe.danhSachGhe
  );
  const thongTinPhim = useSelector(
    (state) => state.phongVeReducer.thongTinPhongVe.thongTinPhim
  );
  const lsChairLeft = [
    1, 2, 17, 18, 33, 34, 49, 50, 65, 66, 81, 82, 97, 98, 113, 114, 129, 130,
    145, 146,
  ];
  const lsChairRight = [
    15,
    16,
    31,
    32,
    ,
    47,
    48,
    63,
    64,
    79,
    80,
    95,
    96,
    111,
    112,
    127,
    128,
    143,
    144,
    159,
    160,
  ];
  console.log(lsChairRight);
  return isLoading ? (
    <Loading />
  ) : danhSachGhe == undefined || thongTinPhim == undefined ? (
    <Error />
  ) : (
    <>
      <div className="datVe">
        <div className="row m-0">
          <div className="col-12 col-md-9  overflow-auto">
            <div className="container">
              <div className="text-center titleListChair"></div>
              <div className="row danhSachGhe">
                <div className="col-2 m-0 d-flex flex-wrap">
                  {danhSachGhe?.map((ghe, index) => {
                    if (lsChairLeft.indexOf(index + 1) !== -1) {
                      return (
                        <div key={index} style={{ width: "50%" }}>
                          <WeekendIcon
                            disabled={ghe.daDat}
                            className={
                              ghe.daDat === true ? "gheDaDat" : "gheChuaDat"
                            }
                            style={{
                              display: "block",
                              fontSize: 30,
                              color: "#696969",
                              // cursor: "pointer",
                              textAlign: "center",
                              margin: "auto",
                            }}
                          />
                          <p className="m-0" style={{ textAlign: "center" }}>
                            {ghe.tenGhe}
                          </p>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="col-8 m-0 d-flex flex-wrap">
                  {danhSachGhe?.map((ghe, index) => {
                    if (
                      lsChairRight.indexOf(index + 1) === -1 &&
                      lsChairLeft.indexOf(index + 1) === -1
                    ) {
                      return (
                        <div key={index} style={{ width: "8.33%" }}>
                          <WeekendIcon
                            disabled={ghe.daDat}
                            className={
                              ghe.daDat === true ? "gheDaDat" : "gheChuaDat"
                            }
                            style={{
                              display: "block",
                              fontSize: 30,
                              color: "#696969",
                              // cursor: "pointer",
                              textAlign: "center",
                              margin: "auto",
                            }}
                          />
                          <p className="m-0" style={{ textAlign: "center" }}>
                            {ghe.tenGhe}
                          </p>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="col-2 m-0 d-flex flex-wrap">
                  {danhSachGhe?.map((ghe, index) => {
                    if (lsChairRight.indexOf(index + 1) !== -1) {
                      return (
                        <div key={index} style={{ width: "50%" }}>
                          <WeekendIcon
                            disabled={ghe.daDat}
                            className={
                              ghe.daDat === true ? "gheDaDat" : "gheChuaDat"
                            }
                            style={{
                              display: "block",
                              fontSize: 30,
                              color: "#696969",
                              // cursor: "pointer",
                              textAlign: "center",
                              margin: "auto",
                            }}
                          />
                          <p className="m-0" style={{ textAlign: "center" }}>
                            {ghe.tenGhe}
                          </p>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center">
                {/* {danhSachGhe?.map((ghe, index) => {
                  return (
                    <div key={index}>
                      <WeekendIcon
                        style={{
                          display: "block",
                          fontSize: 30,
                          color: "#696969",
                          cursor: "pointer",
                          textAlign: "center",
                          margin: "auto",
                        }}
                      />
                      <p className="m-0" style={{ textAlign: "center" }}>
                        {ghe.tenGhe}
                      </p>
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-3"
            style={{
              // backgroundColor: "white",
              // boxShadow: "2px 2px 30px #eee",
              height: "100%",
            }}
          >
            <div className="d-flex align-items-center">
              <img
                className="mr-2"
                src={thongTinPhim.hinhAnh}
                alt="posterPhim"
                style={{ display: "block", width: 120 }}
              />
              <p> {thongTinPhim.tenPhim}</p>
            </div>
            <p>
              Cụm rạp: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
            </p>
            <p>Địa chỉ: {thongTinPhim.diaChi}</p>
            <p>Giờ chiếu: {thongTinPhim.gioChieu}</p>
            <Divider />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Booking;
