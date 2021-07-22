import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListMovieAction } from "../../store/actions/movie.action";

function ListMovie() {
  const dispatch = useDispatch();
  //   get data render ra giao diện
  useEffect(() => dispatch(getListMovieAction()), []);

  return <div>h3asdasd</div>;
}

export default ListMovie;
