import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "./SiderBar.scss";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { logoutAction } from "../../store/actions/auth.action";
const useStyles = makeStyles({
  list: {
    width: "70vw",
  },
  fullList: {
    width: "auto",
  },
});

export default function Sidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const hoTen = useSelector((state) => state.authReducer.user.hoTen);
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const dispatch = useDispatch();
  const history = useHistory();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="buttonShowSidebar" style={{ marginLeft: "auto" }}>
      {console.log("render Siderbar")}
      <React.Fragment key={"right"}>
        <Button
          onClick={toggleDrawer("right", true)}
          className="toggleButtonSideBar"
        >
          <img
            src="https://tix.vn/app/assets/img/icons/menu-options.png"
            alt=""
            style={{ width: 25, height: 16 }}
          />
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {/* {list("right")} */}
          <div
            className={clsx(classes.list, {
              [classes.fullList]: "right" === "top" || "right" === "bottom",
            })}
            role="presentation"
            onClick={toggleDrawer("right", false)}
            onKeyDown={toggleDrawer("right", false)}
          >
            <List className="containerNavBar">
              <ListItem className="">
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
                {isLogin ? (
                  <Typography>{hoTen}</Typography>
                ) : (
                  <Link to="/dang-nhap">Đăng nhập</Link>
                )}

                <Button className="exitSideBar">
                  <img
                    src="https://tix.vn/app/assets/img/icons/next-session.png"
                    alt=""
                  />
                </Button>
              </ListItem>
              <ListItem>
                <a href="#">Lịch Chiếu</a>
              </ListItem>
              <ListItem>
                <Link to="#">Cụm rạp</Link>
              </ListItem>
              <ListItem>
                <Link to="#">Tin Tức</Link>
              </ListItem>
              <ListItem>
                <Link to="#">Ứng dụng</Link>
              </ListItem>
              {isLogin ? (
                <ListItem>
                  <Link to="/" onClick={() => dispatch(logoutAction(history))}>
                    Đăng Xuất
                  </Link>
                </ListItem>
              ) : null}
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
