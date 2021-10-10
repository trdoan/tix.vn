import React from "react";
import { Link } from "react-router-dom";
import hinh from "./../../assets/img/404.jpg";
import "./Error.scss";
function ErrorPage() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div
              className="col-sm-10 col-sm-offset-1  text-center"
              style={{ margin: "auto" }}
            >
              <h1 className="text-center ">Opps 404 :(</h1>
              <div
                className="four_zero_four_bg"
                style={{ marginTop: "50px" }}
              ></div>
              <div className="contant_box_404 ">
                <h3 className="h2">Bạn ơi!....Có gì đó sai sai ?</h3>
                {/* <p>the page you are looking for not avaible!</p> */}
                <Link to="/" className="link_404">
                  <span className="text"> TRANG CHỦ</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
