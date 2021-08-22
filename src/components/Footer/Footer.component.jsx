import React from "react";
import logoApple from "./../../assets/img/applelogo.png";
import logoAndroid from "./../../assets/img/androidlogo.png";
import logoFacebook from "./../../assets/img/facebooklogo.png";
import logoZalo from "./../../assets/img/zalologo.png";
import dataFooter from "./dataFooter";
import "./footer.scss";
const renderDanhSachDoiTac = () => {
  return dataFooter.map((doiTac, index) => {
    return (
      <div
        key={index}
        className="doiTacItem"
        style={{ width: "20%", margin: "5px 0" }}
      >
        <a
          href={doiTac.link}
          title={doiTac.name}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={doiTac.img}
            alt=""
            style={{
              width: 30,
              height: 30,
              borderRadius: 50,
              background: "#fff",
            }}
          />
        </a>
      </div>
    );
  });
};
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="titleFooter">TIX</div>
            <div className="contentFooter">
              <div className="col-sm-6 col-xs-12">
                <a href="https://tix.vn/faq">FAQ</a>
                <a href="https://tix.vn/brand-guideline/">Brand Guidelines</a>
              </div>
              <div className="col-sm-6 col-xs-12">
                <a href="https://tix.vn/thoa-thuan-su-dung">
                  Thỏa thuận sử dụng
                </a>
                <a href="https://tix.vn/chinh-sach-bao-mat">
                  Chính sách bảo mật
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="titleFooter">ĐỐI TÁC</div>
            <div className="contentFooter">
              <div className="col-sm-12 col-xs-12">
                <div className="d-flex flex-wrap">{renderDanhSachDoiTac()}</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-sm-6">
                <div className="titleFooter">MOBILE APP</div>
                <span style={{ display: "inline-block", margin: "5px" }}>
                  <img src={logoApple} height={30} alt="logoApple" />
                </span>
                <span style={{ display: "inline-block", margin: "5px" }}>
                  <img src={logoAndroid} height={30} alt="logoAndroid" />
                </span>
              </div>
              <div className="col-sm-6">
                <div className="titleFooter">SOCIAL</div>
                <span style={{ display: "inline-block", margin: "5px" }}>
                  <a
                    href="https://www.facebook.com/tix.vn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={logoFacebook} width={30} alt="logoFacebook" />
                  </a>
                </span>
                <span style={{ display: "inline-block", margin: "5px" }}>
                  <a
                    href="https://zalo.me/tixdatve"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={logoZalo} width={30} alt="logoZalo" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="hrFooter" />
        <div className="row">
          <div className="col-sm-1 col-xs-12 imgFooter">
            <img
              className="vngIcon"
              src="	https://tix.vn/app/assets/img/icons/zion-logo.jpg"
              alt="vngIcon"
              style={{ borderRadius: 8 }}
            />
          </div>
          <div className="col-sm-9 col-xs-12 infoFooter">
            <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
            <span>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </span>
            <span>
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              <br />
              đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
              ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
              Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí
              Minh cấp.
            </span>
            <span>
              Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
              <br />
              Email:{" "}
              <a href="mailto:support@tix.vn" style={{ color: "#FB4226" }}>
                support@tix.vn
              </a>
            </span>
          </div>
          <div className="col-sm-2 col-xs-12 imgFooter">
            <a
              target="_blank"
              href="http://online.gov.vn/Home/WebDetails/62782"
              rel="noreferrer"
            >
              <img
                className="imgBoCo"
                alt="Bộ Công Thương"
                src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
