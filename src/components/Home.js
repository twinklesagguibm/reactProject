import React, { useState, useEffect } from "react";
import Login from "./login";
import { Switch, Route, BrowserRouter, Link, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import About from "./About";
import Team from "./Team";
import "bootstrap-4-grid/css/grid.min.css";
import store from "../store/store";
import User from "../userImage.png";

export default function Home() {
  const [data, setData] = useState();
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };
  const newState = store.getState();
  return (
    <div>
      <BrowserRouter>
        <div className="bootstrap-wrapper">
          <div className="app-container container">
            <div className="row ">
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 color-bg">
                <p className="banner">React js</p>
                <p className="bannerJs">iJavascript</p>
              </div>
              <div
                className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                <div className="row">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <img
                      src={User}
                      style={{ width: "93px", margin: "5px 18px -9px" }}
                    />
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <h2>Welcome {newState.user}</h2>
                    <p>Last login: 27 june 2020</p>
                  </div>
                </div>

                <hr />
              </div>
            </div>
            <div className="row">
              <div
                className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"
                style={{
                  backgroundColor: "#F2F2F2",
                  minHeight: "500px",
                  paddingTop: "32px",
                  marginBottom: "-4px",
                }}
              >
                <Link className="sidemenu" to="/dashboard">
                  Dashboard
                </Link>
                <hr />
                <Link className="sidemenu" to="/About">
                  About
                </Link>
                <hr />
                <Link className="sidemenu" to="/Team">
                  Team
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
