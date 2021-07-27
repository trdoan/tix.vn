import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 215,
    height: 440,
    // maxHeight: 480,
    marginTop: 20,
    margin: "0px 10px",
    // padding: "5px",
  },
  media: {
    height: 300,
    maxHeight: 500,
  },
});

export default function MovieCard(props) {
  const classes = useStyles();
  const { tenPhim, moTa, hinhAnh } = props.movie;
  return (
    <Card className={classes.root} style={{ position: "relative" }}>
      <CardActionArea>
        <CardMedia
          className={classes.media + " imgCardMedia"}
          image={hinhAnh}
          // title="Contemplative Reptile"
          style={{ position: "relative" }}
        >
          <div className="trailerMovie"></div>
        </CardMedia>

        <CardContent className="cardContent">
          <span className="typeMovie">C18</span>
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            style={{ fontSize: "16px", display: "inline" }}
          >
            {tenPhim}
          </Typography>

          {/* <Typography variant="body2" color="textSecondary" component="p">
            {moTa}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button
          size="small"
          color="primary"
          style={{
            position: "absolute",
            display: "block",
            width: "90%",
            margin: "auto",
            bottom: "20px",
            border: "1px solid #fc4226",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          MUA VÉ
        </Button> */}
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
        <Typography
          style={{
            fontSize: "13px",
            position: "absolute",
            bottom: "10px",
            left: "0",
          }}
        >
          Thời lượng: 120 phút
        </Typography>
      </CardActions>
    </Card>
  );
}
