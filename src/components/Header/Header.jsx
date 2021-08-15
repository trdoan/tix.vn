import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// logo
// import logo from "../../img/11.png";
// css
import "./Header.scss";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.component";
import { useSelector } from "react-redux";
// import SignInPage from "../../pages/dang-nhap/dang-nhap.page";

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
    fontSize: "14px !important",
  },
  logo_website: {
    width: "50px",
    height: "50px",
  },
}));

export default function Header() {
  const classes = useStyles();
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const user = useSelector((state) => state.authReducer.user);
  console.log("RENDER HEADER");
  return (
    <div className={classes.root + " header"}>
      <AppBar position="static" className="header">
        <Toolbar>
          <Link to="/" exact="true">
            <img
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
              alt="logo"
              className={classes.logo_website}
            />
          </Link>
          <div className="navbar__header">
            <Link to="/" className="nav-link-item" exact="true">
              <Typography variant="h6" className={classes.title}>
                Lịch Chiếu
              </Typography>
            </Link>
            <Link to="/chi-tiet-phim" exact="true" className="nav-link-item">
              <Typography variant="h6" className={classes.title}>
                Cụm rạp
              </Typography>
            </Link>
            <Link to="/dat-ve" extract="true" className="nav-link-item">
              <Typography variant="h6" className={classes.title}>
                Tin Tức
              </Typography>
            </Link>
            <Link to="/dat-ve" extract="true" className="nav-link-item">
              <Typography variant="h6" className={classes.title}>
                Ứng dụng
              </Typography>
            </Link>
          </div>
          <Link to="/dang-nhap" exact="true" className="nav-link-item">
            <div className="loginContainer d-flex align-items-center">
              <img
                src="https://tix.vn/app/assets/img/avatar.png"
                alt="avtar"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  margin: "0 5px",
                }}
              />
              <Typography>
                {isLogin ? "Xin chào " + user.hoTen : "Đăng nhập"}{" "}
              </Typography>
            </div>
          </Link>

          <Sidebar />
        </Toolbar>
      </AppBar>
    </div>
  );
}
