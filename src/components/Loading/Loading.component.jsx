import React from "react";
// import { css } from "@emotion/react";

// import ClipLoader from "react-spinners/ClipLoader";
// import "./../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
function Loading() {
  // const override = css`
  //   display: block;
  //   margin: 30% auto;
  //   transform: translate(-50%, -50%);
  //   border-color: #fc4226;
  // `;
  return (
    <div
      className="d-flex justify-content-centerr align-items-center"
      style={{ height: "60vh" }}
    >
      <Loader
        type="MutatingDots"
        color="#fc4226"
        secondaryColor="#222"
        height={100}
        width={100}
        timeout={0} //3 secs
        style={{ margin: "auto", display: "block" }}
      />
    </div>
  );
}

export default React.memo(Loading);
