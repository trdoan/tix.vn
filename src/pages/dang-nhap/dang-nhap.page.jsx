import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { loginAction } from "../../store/actions/auth.action";
import { useDispatch } from "react-redux";
import logo from "./../../assets/img/logoLogin.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import optionLoginTix from "./../../assets/img/tixLogin.png";
import "./login.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const notify = () =>
  toast.info("Tính năng đang được cập nhật", {
    position: "top-right",
    autoClose: 3500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const reLogin = (mess) => {
  toast.error(`${mess}. Hãy đăng nhập lại`, {
    position: "top-right",
    autoClose: 3500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export default function SignInPage() {
  const classes = useStyles();

  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    // console.log(user);
  };
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(loginAction(user, history));
  };
  return (
    <div className="login">
      <div className="signin--wrapper">
        <img
          src="https://tix.vn/app/assets/img/icons/web-logo.png"
          alt="logoLogin"
          className="logoLogin"
        />
        <form className noValidate onSubmit={handleSubmitLogin}>
          <TextField
            id="taiKhoan"
            label="Tài khoản"
            type="text"
            name="taiKhoan"
            onChange={(e) => handleChangeInput(e)}
          />
          <TextField
            id="matKhau"
            label="Mật khẩu"
            type="password"
            name="matKhau"
            onChange={(e) => handleChangeInput(e)}
          />{" "}
          <div
            id="notiMessage"
            className="text-danger"
            style={{ textAlign: "left", marginRight: "auto", fontSize: 14 }}
          ></div>
          <button
            type="submit"
            className="login__item "
            onClick={(e) => handleSubmitLogin(e)}
            style={{
              border: "none",
              borderRadius: "5px",
              padding: 0,
            }}
          >
            <img
              src={optionLoginTix}
              alt="login with tix"
              className="img-fluid"
              autoComplete="false"
            />
          </button>
        </form>
        <div className="loginOption">
          <div className="login__item ">
            <img
              src="https://tix.vn/app/assets/img/login/btn-FB.png"
              alt="login with facebook"
              className="img-fluid"
            />
          </div>
          <div className="login__item ">
            <img
              src="https://tix.vn/app/assets/img/login/btn-Zalo.png"
              alt=""
              className="img-fluid"
            />
          </div>{" "}
          <div className="login__item ">
            <img
              src="https://tix.vn/app/assets/img/login/btn-Google.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="closeLogin" onClick={() => history.push("/")}></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
