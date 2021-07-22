import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/loading";

function HomePage() {
  const isLoading = useSelector((state) => state.commonReducer.isLoading);
  console.log("Loading home: ", isLoading);
  return isLoading ? <Loading /> : <div>Home</div>;
}

export default HomePage;
