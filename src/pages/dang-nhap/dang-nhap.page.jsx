import React, { useState } from "react";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";

import { useHistory } from "react-router-dom";
import { loginAction } from "../../store/actions/auth.action";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./login.scss";

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
        <form noValidate onSubmit={handleSubmitLogin}>
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
          <div className="" style={{ textAlign: "left" }}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Duy trì đăng nhập"
            />
          </div>
          <div
            id="notiMessage"
            className="text-danger"
            style={{ textAlign: "left", margin: "10px auto", fontSize: 14 }}
          ></div>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            className="login__item"
            onClick={(e) => handleSubmitLogin(e)}
          >
            ĐĂNG NHẬP
          </Button>
        </form>
        <div className="closeLogin" onClick={() => history.push("/")}></div>
      </div>
      <ToastContainer />
    </div>
  );
}
