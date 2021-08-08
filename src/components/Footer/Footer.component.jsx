import React from "react";
import logoApple from "./../../img/applelogo.png";
import logoAndroid from "./../../img/androidlogo.png";
import logoFacebook from "./../../img/facebooklogo.png";
import logoZalo from "./../../img/zalologo.png";
function Footer() {
  return (
    <div className="footer my-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="titleFooter">TIX</div>
            <div className="contentFooter">
              <div className="col-sm-6 col-xs-12">
                <a href="">FAQ</a>
                <a href="">Brand Guidelines</a>
              </div>
              <div className="col-sm-6 col-xs-12">
                <a href="">Thỏa thuận sử dụng</a>
                <a href="">Chính sách bảo mật</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="titleFooter">ĐỐI TÁC</div>
            <div className="contentFooter">
              <div className="col-sm-6 col-xs-12">
                <a href="">FAQ</a>
                <a href="">Brand Guidelines</a>
              </div>
              <div className="col-sm-6 col-xs-12">
                <a href="">Thỏa thuận sử dụng</a>
                <a href="">Chính sách bảo mật</a>
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
                  <img src={logoFacebook} width={30} alt="logoFacebook" />
                </span>
                <span style={{ display: "inline-block", margin: "5px" }}>
                  <img src={logoZalo} width={30} alt="logoZalo" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
