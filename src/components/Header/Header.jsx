import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.component";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../store/actions/auth.action";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Header.scss";
import useWindowSize from "../../helper/hook/useWindowSize";

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
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  const classes = useStyles();
  const history = useHistory();
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const user = useSelector((state) => state.authReducer.user);

  const handleClick = () => {
    document
      .getElementsByClassName("profileWrapper")[0]
      .classList.toggle("d-block");
  };
  return (
    <div className={classes.root + " header"}>
      <AppBar position="static" className="header">
        <Toolbar>
          <Link to="/" exact={`true`}>
            <img
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
              alt="logo"
              className={classes.logo_website}
            />
          </Link>
          <div className="navbar__header">
            <Link to="/" className="nav-link-item" exact={`true`}>
              <Typography variant="h6" className={classes.title}>
                Lịch Chiếu
              </Typography>
            </Link>
            <Link to="/chi-tiet-phim" exact={`true`} className="nav-link-item">
              <Typography variant="h6" className={classes.title}>
                Cụm rạp
              </Typography>
            </Link>
            <Link to="/dat-ve" exact={`true`} className="nav-link-item">
              <Typography variant="h6" className={classes.title}>
                Tin Tức
              </Typography>
            </Link>
            <Link to="/dat-ve" exact={`true`} className="nav-link-item">
              <Typography variant="h6" className={classes.title}>
                Ứng dụng
              </Typography>
            </Link>
          </div>
          {isLogin ? (
            <div
              className="loginHeader"
              style={{
                position: "relative",
                color: "black",
                cursor: "pointer",
              }}
            >
              <div
                className="loginContainer d-flex align-items-center"
                onClick={() => handleClick()}
              >
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
                <Typography>{isLogin ? user.hoTen : "Đăng nhập"} </Typography>
              </div>
              <div className="profileWrapper" id="profileWrapper">
                <div className="arrow-up"></div>
                <Link to="/profile" exact={`true`}>
                  <AccountCircleIcon /> Hồ sơ
                </Link>
                <div className="">
                  <Link
                    to="/"
                    onClick={() => dispatch(logoutAction(history))}
                    exact={`true`}
                  >
                    <ExitToAppIcon /> Đăng xuất
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <Link
              to="/dang-nhap"
              exact={`true`}
              className="nav-link-item"
              style={{ position: "relative" }}
            >
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
                <Typography>Đăng nhập</Typography>
              </div>
            </Link>
          )}

          {width <= 767 && <Sidebar />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
