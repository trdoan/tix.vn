import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import star1 from "./../../assets/img/star1.png";
import star1_2 from "./../../assets/img/star1.2.png";
import { modalOnAction } from "../../store/actions/common.action";
import "./MovieCard.scss";

import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    // maxWidth: 220,
    // maxHeight: 480,
    marginTop: 20,
    margin: "20px 10px ",
    // padding: "5px",
    background: "none",
    boxShadow: "none",
    // maxHeight: 390,
    // height: 390,
    "&:hover": {
      background: "none",
    },
  },
  media: {
    // width: 220,
    height: 300,
    maxHeight: 500,
  },
});

export function MovieCard(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const getId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  // console.log(videoId)
  const classes = useStyles();

  const { maPhim, tenPhim, danhGia, hinhAnh, trailer } = props.movie;
  // console.log());
  const videoId = getId(
    trailer == null ? "https://www.youtube.com/watch?v=j8U06veqxdU" : trailer
  );

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
        <img
          key={index}
          src={star1}
          style={{ width: 8, height: 8 }}
          alt="starOfMovie"
        ></img>
      );
    });
  };

  return (
    <>
      <Card
        className={classes.root + " cardItem"}
        style={{ position: "relative", background: "none" }}
      >
        <CardActionArea
          style={{ backgroundColor: "none" }}
          // onClick={() => history.push(`/chi-tiet-phim/${maPhim}`)}
        >
          <CardMedia
            className={classes.media + " imgCardMedia"}
            image={hinhAnh.replace("http", "https")}
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
              {/* <span className={loaiChieu ? "typeMovie" : "typeMovie-2"}>
                {loaiChieu ? "C18" : "P"}
              </span>{" "} */}
              <span className="typeMovie">C18</span> {tenPhim}
            </p>
          </CardContent>
        </CardActionArea>
        {/* <CardActions> */}
        <div className="datVe">
          <Button
            color="primary"
            variant="contained"
            style={{ width: "100%" }}
            onClick={() => history.push(`/chi-tiet-phim/${maPhim}`)}
          >
            Đặt vé
          </Button>
        </div>
        {/* </CardActions> */}

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

export default React.memo(MovieCard);
