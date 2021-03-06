import React from "react";
import "./MobileApp.scss";
import mobile from "./../../assets/img/mobile.png";
import Slider from "react-slick";

import slide1 from "./../../assets/img/slide1.jpg";
import slide2 from "./../../assets/img/slide2.jpg";
import slide3 from "./../../assets/img/slide3.jpg";
import slide4 from "./../../assets/img/slide4.jpg";
import slide5 from "./../../assets/img/slide5.jpg";
import slide6 from "./../../assets/img/slide6.jpg";
import slide7 from "./../../assets/img/slide7.jpg";
import slide8 from "./../../assets/img/slide8.jpg";
import slide9 from "./../../assets/img/slide9.jpg";
import slide10 from "./../../assets/img/slide10.jpg";
import slide11 from "./../../assets/img/slide11.jpg";
import slide12 from "./../../assets/img/slide12.jpg";
function MobileApp() {
  // console.log(slide1);
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    width: 100,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  const renderSlideMobileApp = () => {
    const dataMobileApp = [];

    dataMobileApp.push(slide1);
    dataMobileApp.push(slide2);
    dataMobileApp.push(slide3);
    dataMobileApp.push(slide4);
    dataMobileApp.push(slide5);
    dataMobileApp.push(slide6);
    dataMobileApp.push(slide7);
    dataMobileApp.push(slide8);
    dataMobileApp.push(slide9);
    dataMobileApp.push(slide10);
    dataMobileApp.push(slide11);
    dataMobileApp.push(slide12);

    // console.log(dataMobileApp);
    return dataMobileApp.map((item, index) => {
      return (
        <img
          src={item}
          className="itemSlideMobile"
          alt="itemSlideMobile"
          key={index}
        ></img>
      );
    });
  };
  return (
    <div className="mobileApp">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left text-left text-white">
            <div className="content-firstRow">
              <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
              <p className="textLeft">người yêu điện ảnh</p>
              <br />
              <p className="textSmallLeft">
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <br />
              <button className="buttonLeft">
                App miễn phí - Tải về ngay!
              </button>
              <p className="textAppUnder">
                TIX có hai phiên bản
                <a
                  className="tagA"
                  target="_blank"
                  href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                  rel="noreferrer"
                >
                  iOS
                </a>
                {"&"}
                <a
                  className="tagA"
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  rel="noreferrer"
                >
                  Android
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 right mobileBorder">
            <img className="mobileDevice" src={mobile} alt="mobile" />
            <Slider {...setting}>{renderSlideMobileApp()}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
