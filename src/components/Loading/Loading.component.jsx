import React from "react";
import Loader from "react-loader-spinner";
function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", margin: "auto", width: "auto" }}
    >
      <Loader type="BallTriangle" color="#fc4226" height={80} width={80} />
    </div>
  );
}

export default React.memo(Loading);
