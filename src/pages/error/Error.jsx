import React from "react";
import hinh from "./../../assets/img/404.jpg";
import "./Error.scss";
function ErrorPage() {
  return (
    <div className="pageError">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 imgContainer">
            <img src={hinh} alt="404page" className="imgError img-fluid" />
          </div>
          <h2 className="col-12 col-md-5 contentError">
            OOPS! TRANG KHÔNG TỒN TẠI
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
