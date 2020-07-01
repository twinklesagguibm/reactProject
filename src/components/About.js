import React from "react";
import "bootstrap-4-grid/css/grid.min.css";
import logo from "../javascriptImage.png";
import Reusable from "./Reusable";

export default function About() {
  return (
    <div className="bootstrap-wrapper">
      <div className="app-container container">
        <div className="row ">
          <div
            className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 dashboard"
            style={{ marginLeft: "25%", marginTop: "-49%", marginBottom: "4%" }}
          >
            <div className="row">
              <h3
                style={{
                  fontFamily: "Microsoft JhengHei",
                  fontSize: "32px",
                  marginTop: "-34px",
                  marginLeft: "22px",
                }}
              >
                About iJavascript
              </h3>
            </div>
            <hr />
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <img src={logo} alt="Logo" />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <p>
                  iJavascript is a reseacrh group, founded to check different
                  javascript frameworks bases on different design patteres{" "}
                  <br />
                  During kikoff it will test React, Angular, Knokout and ember
                  js features. This use case will prove different aspects of
                  framework capabilities.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                <h3
                  style={{ fontFamily: "Microsoft JhengHei", fontSize: "18px" }}
                >
                  Re-usable component{" "}
                </h3>

                <div className="row">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <Reusable />
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <Reusable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 style={{ display: "none" }}>Dialog Shown/Hidden with Logic</h4>
      </div>
    </div>
  );
}
