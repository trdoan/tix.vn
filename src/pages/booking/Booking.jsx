import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  chonGheAction,
  datVeAction,
  layThongTinPhongVe,
} from "../../store/actions/phongVe.action";

import Loading from "./../../components/Loading/Loading.component";
import { Button, Divider } from "@material-ui/core";
import Error from "./../error/Error";
import Footer from "./../../components/Footer/Footer.component";
import clsx from "clsx";
import Swal from "sweetalert2";
// import Swal from "sweetalert2/dist/sweetalert2.js";

// import "sweetalert2/src/sweetalert2.scss";
import "./Booking.scss";

import Header from "../../components/Header/Header";
function Booking() {
  // const renderChair = () => {
  //   return <WeekendIcon style={{ color: "orange" }} />;
  // };
  const { maLichChieu } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.commonReducer.isLoading);
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  useEffect(() => {
    dispatch(layThongTinPhongVe(maLichChieu));
  }, []);
  const user = useSelector((state) => state.authReducer.user);
  const danhSachGhe = useSelector((state) => state.phongVeReducer.danhSachGhe);
  const thongTinPhim = useSelector(
    (state) => state.phongVeReducer.thongTinPhongVe.thongTinPhim
  );
  const lsChairLeft = danhSachGhe?.filter(
    (ghe) => ghe.tenGhe % 16 == 1 || ghe.tenGhe % 16 == 2
  );

  const lsChairRight = danhSachGhe?.filter(
    (ghe) => ghe.tenGhe % 16 == 0 || ghe.tenGhe % 16 == 15
  );

  const lsChairCenter = danhSachGhe?.filter(
    (ghe) => !lsChairLeft.includes(ghe) && !lsChairRight.includes(ghe)
  );
  const handleChoiceChair = (chair) => {
    dispatch(chonGheAction(chair));
  };
  const handleBooking = () => {
    if (isLogin === false) {
      Swal.fire({
        title: "Vui lòng đăng nhập",
        // text: "Do you want to continue",
        icon: "info",
        confirmButtonText: "Ok",
        // width: "100%",
        // height: "100%",

        padding: 0,
        customClass: {
          container: "modal__booking",
          popup: "modal__content",
          confirmButton: "btnConfirm",
        },
      });
    } else {
      // call API đặt vé
      dispatch(datVeAction(maLichChieu, danhSachGhe, user)).then(() => {
        Swal.fire({
          title: "Đặt vé thành công",

          icon: "success",
          confirmButtonText: "Ok",

          padding: 0,
          customClass: {
            container: "modal__booking",
            popup: "modal__content",
            confirmButton: "btnConfirm",
          },
        });
        document
          .getElementsByClassName("btnConfirm")[0]
          .addEventListener("click", () => {
            dispatch(layThongTinPhongVe(maLichChieu));
          });
      });
    }
  };

  const renderDanhSachGhe = (mangDanhSachGhe) => {
    return mangDanhSachGhe.map((ghe, index) => {
      return (
        <button
          key={index}
          disabled={ghe.daDat}
          className={clsx({
            chair: true,
            gheVip: ghe.loaiGhe == "Vip",
            gheThuong: ghe.loaiGhe == "Thuong",
            daDat: ghe.daDat,
            dangChon: ghe.dangChon,
          })}
          style={{ borderRadius: "none" }}
          onClick={() => handleChoiceChair(ghe)}
        >
          {ghe.daDat ? "X" : ghe.tenGhe}
        </button>
      );
    });
  };
  const gheThuong = danhSachGhe?.filter(
    (ghe) => ghe.loaiGhe == "Thuong" && ghe.dangChon == true
  );
  const gheVip = danhSachGhe?.filter(
    (ghe) => ghe.loaiGhe == "Vip" && ghe.dangChon == true
  );
  const gheDangChon = gheThuong.concat(gheVip);

  // const [gheDangChon, setGheDangChon] = useState(gheThuong.concat(gheVip));
  return isLoading ? (
    <Loading />
  ) : danhSachGhe == undefined || thongTinPhim == undefined ? (
    <Error />
  ) : (
    <>
      <Header />
      <div className="datVe">
        <div className="row m-0">
          <div className=" m-0 col-12 col-md-8  overflow-auto">
            <div className="container danhSachGhe">
              <div className="text-center titleListChair">MÀN HÌNH </div>
              <div className="row  align-items-center flex-nowrap">
                <div className="col-2 m-0 d-flex flex-wrap">
                  {renderDanhSachGhe(lsChairLeft)}
                </div>
                <div className="col-8  d-flex flex-wrap">
                  {renderDanhSachGhe(lsChairCenter)}
                </div>
                <div className="col-2 m-0 d-flex flex-wrap">
                  {renderDanhSachGhe(lsChairRight)}
                </div>
              </div>
              <Divider style={{ margin: "10px 0" }} />
              <div
                className="row moTa m-auto justify-content-around"
                style={{ width: "100%" }}
              >
                <div className="loaiGhe d-flex align-items-center">
                  <button disabled="" class="chair gheVip daDat">
                    X
                  </button>
                  <span>Đã đặt</span>
                </div>{" "}
                <div className="loaiGhe d-flex align-items-center">
                  <button class="chair gheThuong dangChon">20</button>
                  <span>Đang chọn</span>
                </div>{" "}
                <div className="loaiGhe d-flex align-items-center">
                  <button class="chair gheThuong">01</button>
                  <span>Ghế thường</span>
                </div>{" "}
                <div className="loaiGhe d-flex align-items-center">
                  <button class="chair gheVip">100</button>
                  <span>Ghế vip</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="m-0 col-12 col-md-4"
            style={{
              height: "100%",
            }}
          >
            <div className="thongTinVePhim">
              <div className="chiTietLichChieu">
                <p>{thongTinPhim.tenRap}</p>
                <p>{thongTinPhim.tenPhim}</p>
                <p>
                  {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
                </p>
              </div>
            </div>
            <Divider />
            <div className="">
              <p className="heading__element">Ghế đang chọn</p>
              <div className="d-flex">
                <p className="heading__element__child">
                  Ghế thường x {gheThuong.length}
                </p>
                <p className="money-item">
                  {gheThuong
                    .reduce((tongTien, ghe) => tongTien + ghe.giaVe, 0)
                    .toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                </p>
              </div>
              <div className="d-flex flex-wrap">
                {danhSachGhe.map((ghe, index) => {
                  return ghe.dangChon == true && ghe.loaiGhe == "Thuong" ? (
                    <button
                      key={index}
                      disabled={ghe.daDat}
                      className={clsx({
                        chair: true,
                        // gheVip: ghe.loaiGhe == "Vip",
                        gheThuong: ghe.loaiGhe == "Thuong",
                        // daDat: ghe.daDat,
                        // dangChon: ghe.dangChon,
                      })}
                      style={{ borderRadius: "none" }}
                      onClick={() => handleChoiceChair(ghe)}
                    >
                      {ghe.daDat ? "X" : ghe.tenGhe}
                    </button>
                  ) : null;
                })}
              </div>
              <div className="d-flex align-items-center">
                <p className="heading__element__child">
                  Ghế vip x {gheVip.length}
                </p>
                <p className="money-item">
                  {gheVip
                    .reduce((tongTien, ghe) => tongTien + ghe.giaVe, 0)
                    .toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                </p>
              </div>

              <div className="d-flex flex-wrap">
                {danhSachGhe.map((ghe, index) => {
                  return ghe.dangChon == true && ghe.loaiGhe == "Vip" ? (
                    <button
                      key={index}
                      disabled={ghe.daDat}
                      className={clsx({
                        chair: true,
                        gheVip: ghe.loaiGhe == "Vip",
                        // gheThuong: ghe.loaiGhe == "Thuong",
                        // daDat: ghe.daDat,
                        // dangChon: ghe.dangChon,
                      })}
                      style={{ borderRadius: "none" }}
                      onClick={() => handleChoiceChair(ghe)}
                    >
                      {ghe.daDat ? "X" : ghe.tenGhe}
                    </button>
                  ) : null;
                })}
              </div>
            </div>

            <Divider />
            <div className="d-flex">
              {" "}
              <p className="heading__element">Tổng tiền:</p>
              <p className="money-item">
                {gheDangChon
                  .reduce((tongTien, ghe) => tongTien + ghe.giaVe, 0)
                  .toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
              </p>
            </div>

            <Divider />
            <Button
              // disabled={gheDangChon.length == 0}
              variant="contained"
              color="primary"
              style={{ width: "100%" }}
              onClick={() => {
                handleBooking();
              }}
            >
              ĐẶT VÉ
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Booking;
