import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import star1 from "./../../img/star1.png";
import star1_2 from "./../../img/star1.2.png";

import ReactDOM from "react-dom";
import { modalOnAction } from "../../store/actions/common.action";
const useStyles = makeStyles({
  root: {
    maxWidth: 220,
    height: "auto",
    // maxHeight: 480,
    marginTop: 20,
    margin: "0px 0px",
    // padding: "5px",
    background: "#fff",
    boxShadow: "none",
    maxHeight: 390,
    height: 390,
  },
  media: {
    width: 220,
    height: 300,
    maxHeight: 500,
  },
});

export function MovieCard(props) {
  const dispatch = useDispatch();
  const getId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  // console.log(videoId)
  const classes = useStyles();

  const { tenPhim, danhGia, hinhAnh, trailer } = props.movie;
  // console.log(trailer);
  const videoId = getId(trailer);
  const mangThoiGianPhim = [90, 100, 120, 180];
  let numberStar = 0;
  let arrStar = [];
  if (danhGia >= 8) {
    numberStar = 4;
  }
  if (danhGia >= 6 && danhGia < 8) {
    numberStar = 3;
  }
  if (danhGia <= 5) {
    numberStar = 2;
  }
  for (let i = 0; i < numberStar; i++) {
    arrStar.push("123");
  }
  const renderStarMovie = () => {
    return arrStar.map((item, index) => {
      return (
        <img key={index} src={star1} style={{ width: 8, height: 8 }}></img>
      );
    });
  };

  return (
    <>
      <Card className={classes.root} style={{ position: "relative" }}>
        <CardActionArea style={{ backgroundColor: "none" }}>
          <CardMedia
            className={classes.media + " imgCardMedia"}
            image={hinhAnh}
            // title="Contemplative Reptile"
            style={{ position: "relative" }}
          >
            <div
              className="trailerMovie"
              onClick={() => dispatch(modalOnAction(videoId))}
            ></div>
          </CardMedia>

          <CardContent className="cardContent">
            <p className="titleMovie">
              <span className="typeMovie">C18</span> {tenPhim}
            </p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography
            className="thoiGianPhim"
            style={{
              fontSize: "13px",
              position: "absolute",
              bottom: "10px",
              left: "0",
            }}
          >
            {
              mangThoiGianPhim[
                Math.floor(Math.random() * mangThoiGianPhim.length)
              ]
            }{" "}
            Phút
          </Typography>
        </CardActions>

        <div className="txtPoint ">
          <div className="danhGia">{danhGia}</div>

          <div className="numberStar d-flex justify-content-center">
            {renderStarMovie()}
            <img src={star1_2} alt="" style={{ width: 10, height: 8 }} />
          </div>
        </div>
      </Card>
    </>
  );
}

export default MovieCard;
