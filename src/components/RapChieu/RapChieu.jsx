import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListHeThongRapAction,
  getThongTinCumRap,
} from "../../store/actions/rapChieu.action";
import rapBHD from "./../../assets/img/bhdrap.png";
import rapCNS from "./../../assets/img/cnsrap.jpg";
import rapGalaxy from "./../../assets/img/galaxyrap.jpg";
import rapCGV from "./../../assets/img/cgvrap.jpg";
import rapLotte from "./../../assets/img/lotteRap.jpg";
import rapMega from "./../../assets/img/megarap.jpg";
import Loading from "../Loading/Loading";

function RapChieu() {
  const dispatch = useDispatch();
  const heThongRap = useSelector((state) => state.rapChieuReducer.heThongRap);
  const cumRap = useSelector((state) => state.rapChieuReducer.cumRap);
  const [rapChieu, setRapChieu] = useState(rapBHD);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getListHeThongRapAction());
  }, [dispatch]);
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
          className="hinhAnhCumRap"
          src={rapChieu}
          alt={"hinhAnhCumRap"}
          style={{ width: 95, height: 100, objectFit: "cover" }}
        />
        <div className="content">
          <p className="tenCumRap"> {rap.tenCumRap} </p>
          <p className="diaChi">{rap.diaChi}</p>

          <span className="chiTietCumRap" href="#" style={{ color: "black" }}>
            Chi tiết
          </span>
        </div>
      </a>
    ));
  };
  const handleChonRap = (rapPhim) => {
    // setLoading(true);
    dispatch(getThongTinCumRap(rapPhim.maHeThongRap)).then(() => {
      // setLoading(false);
    });
    // alert(rapPhim.maHeThongRap);
    switch (rapPhim.maHeThongRap) {
      case "BHDStar":
        return setRapChieu(rapBHD);
      case "CGV":
        return setRapChieu(rapCGV);
      case "CineStar":
        return setRapChieu(rapCNS);
      case "Galaxy":
        return setRapChieu(rapGalaxy);
      case "LotteCinima":
        return setRapChieu(rapLotte);
      case "MegaGS":
        return setRapChieu(rapMega);
      default:
        break;
    }
  };
  return (
    <div className="heThongRap">
      <div className="row">
        <>
          <div
            className="nav flex-column nav-pills col-sm-1"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {handleRenderNavHeader()}
          </div>

          <div
            className="nav flex-column nav-pills col-sm-5"
            id="v-pills-tab-2"
            role="tablist"
            aria-orientation="vertical"
          >
            {handleRenderNavContent()}
          </div>
          <div
            className="nav flex-column nav-pills col-sm-6"
            id="v-pills-tab-2"
            role="tablist"
            aria-orientation="vertical"
          ></div>
        </>
      </div>
    </div>
  );
}

export default RapChieu;
