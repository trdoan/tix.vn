import "./App.css";
import Header from "../components/Header/Header";

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignInPage from "../pages/dang-nhap/dang-nhap.page";
import HomePage from "../pages/home/home.page";

import Booking from "../pages/booking/Booking";
import ErrorPage from "../pages/error/Error.jsx";
import MovieDetail from "../pages/movieDetail/MovieDetail";
import Modal from "../components/Modal/Modal.component";

function App() {
  return (
    <>
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {/* <Header /> */}
              <HomePage />
            </Route>
            <Route path="/dang-nhap" exact>
              <SignInPage />
            </Route>
            <Route path="/dat-ve/:maLichChieu" exact>
              {/* <Header /> */}
              <Booking />
            </Route>
            <Route path="/chi-tiet-phim/:maPhim" exact>
              <Header />
              <MovieDetail />
            </Route>
            <Route path="/test" exact>
              <Modal />
            </Route>
            <Route path="/booking" exact>
              <Booking />
            </Route>
            <Route path="">
              <ErrorPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </>
  );
}

export default App;
