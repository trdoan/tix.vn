import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SignInPage from "./pages/dang-nhap/dang-nhap.page";
import HomePage from "./pages/home/home.page";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/dang-nhap" exact>
            <SignInPage />
          </Route>
          <Route path="/dat-ve" exact>
            <h1>Đặt vé</h1>
          </Route>
          <Route path="/chi-tiet-phim" exact>
            <h1>Chi tiết phim</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
