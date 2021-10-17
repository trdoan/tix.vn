import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import star1 from "./../../assets/img/star1.png";
import star1_2 from "./../../assets/img/star1.2.png";
import { modalOnAction } from "../../store/actions/common.action";
import { useHistory } from "react-router-dom";
import { convertHttpsURL, getIdFromYoutube } from "../../helper/URL.helper";
import { rateMovie } from "../../helper/Movie.helper";

const useStyles = makeStyles({
  root: {
    position: "relative",
    background: "none",
    marginTop: 20,
    margin: "20px 10px ",

    boxShadow: "none",
    "&:hover": {
      background: "none",
    },
  },
  media: {
    height: 300,
    maxHeight: 500,
  },
});

export function MovieCard(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { maPhim, tenPhim, danhGia, hinhAnh, trailer } = props.movie;
  const videoId = getIdFromYoutube(
    trailer == null ? "https://www.youtube.com/watch?v=j8U06veqxdU" : trailer
  );
  const { arrStar } = rateMovie(danhGia);

  const renderStarMovie = () => {
    return arrStar.map((item, index) => {
      return (
        <img
          key={index}
          src={star1}
          style={{ width: 8, height: 8 }}
          alt="starOfMovie"
        />
      );
    });
  };

  return (
    <>
      <Card className={classes.root + " cardItem"}>
        <CardActionArea>
          <CardMedia
            className={classes.media + " imgCardMedia"}
            image={convertHttpsURL(hinhAnh)}
            style={{ position: "relative" }}
          >
            <div
              className="trailerMovie"
              onClick={() => dispatch(modalOnAction(videoId))}
            ></div>
          </CardMedia>

          <CardContent
            className="cardContent"
            onClick={() => history.push(`/chi-tiet-phim/${maPhim}`)}
          >
            <p className="titleMovie">
              <span className="typeMovie">C18</span> {tenPhim}
            </p>
          </CardContent>
        </CardActionArea>

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
