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

import "./login.scss";
function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      style={{
        position: "absolute",
        bottom: 15,
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      {"Copyright © "}
      <Link to="/" style={{ color: "#fa5238" }}>
        trddoan{" "}
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

export default function SignInPage() {
  console.log("render SignInPage");
  const classes = useStyles();
  // handleChangeInput

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
    <React.Fragment>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={5} md={7} className={classes.image} />
        <Grid
          item
          xs={12}
          sm={7}
          md={5}
          component={Paper}
          elevation={6}
          square
          style={{ position: "relative" }}
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng nhập
            </Typography>
            <form
              onSubmit={handleSubmitLogin}
              className={classes.form}
              noValidate
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="taiKhoan"
                label="Email"
                name="taiKhoan"
                autoComplete="taiKhoan"
                autoFocus
                onChange={handleChangeInput}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="matKhau"
                label="Mật khẩu"
                type="password"
                id="matKhau"
                autoComplete="current-password"
                onChange={handleChangeInput}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Duy trì đăng nhập"
              />
              <Typography
                className="alert alert-danger text-center "
                id="notifiLogin"
              ></Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Đăng Nhập
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link to="/test" variant="body2" className="nav-link">
                    Quên mật khẩu
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to="/test"
                    variant="body2"
                    exact="true"
                    className="nav-link"
                  >
                    {"Chưa có tài khoản? Đăng ký"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
