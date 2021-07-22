import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// logo
import logo from "../../img/11.png";
// css
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import SignInPage from "../../pages/dang-nhap/dang-nhap.page";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: "0 10px",
  },
  logo_website: {
    width: "50px",
    height: "50px",
  },
}));

export default function Header() {
  const classes = useStyles();
  console.log("render header");
  return (
    <div className={classes.root}>
      <AppBar position="static" className="header">
        <Toolbar>
          <img
            src="https://tix.vn/app/assets/img/icons/web-logo.png"
            alt="logo"
            className={classes.logo_website}
          />
          <div className="navbar__header">
            <Link to="/" className="nav-link-item" exact="true">
              <Typography variant="h6" className={classes.title}>
                Trang chủ
              </Typography>
            </Link>
            <Link to="/chi-tiet-phim" exact="true" className="nav-link-item">
              <Typography variant="h6" className={classes.title}>
                Chi tiết phim
              </Typography>
            </Link>
            <Link to="/dat-ve" extract="true" className="nav-link-item">
              <Typography variant="h6" className={classes.title}>
                Booking
              </Typography>
            </Link>
          </div>
          <Link to="/dang-nhap" exact="true" className="nav-link-item">
            {/* <SignInPage /> */}
            <Typography>LOGIN</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
