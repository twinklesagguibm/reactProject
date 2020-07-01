import React, { useState, useEffect } from "react";
import "bootstrap-4-grid/css/grid.min.css";
import Table from "react-bootstrap/Table";

const values = {
  sms: "SMS Alert",
  news: "Marketing Newsletter",
  flyers: "Flyers",
};

export default function Dashboard() {
  const [name, setName] = useState('');
  const [subscriptions, setSubscriptions] = useState({
    sms: false,
    news: false,
    flyers: false,
  });

  const updateSubscriptions = (event, a) => {
    const newSubscriptions = {
      ...subscriptions,
      [event.target.value]: event.target.checked,
    };
    setSubscriptions(newSubscriptions);
  };

  const popup = () => {
    const subArray = [];

    Object.keys(subscriptions).map(function (keyName, keyIndex) {
      if (subscriptions[keyName] === true) {
        subArray.push(values[keyName]);
      }
    });
    alert(subArray);
  };
  const handleChange = (event)=>{
    setName(event.target.value);
  }
  return (
    <div className="bootstrap-wrapper">
      <div className="app-container container">
        <div className="row ">
          <div
            className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 dashboard"
            style={{ marginLeft: "25%", marginTop: "-49%", marginBottom: "4%" }}
          >
            <div
              className="row"
              style={{ marginTop: "-36px", marginLeft: "1px" }}
            >
              <h3 style={{ fontSize: "18px", color: " #CC0000 " }}>
                Account balance : $3000
              </h3>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <Table striped bordered hover className="table-content">
                  <thead style={{ textAlign: "-webkit-match-parent" }}>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01-Feb-2018</td>
                      <td>Room Rent</td>
                      <td>700</td>
                    </tr>
                    <tr>
                      <td>02-Dec-2018</td>
                      <td>Car wash</td>
                      <td>400</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h3>Subscribe to alerts</h3>
                <input
                  type="checkbox"
                  value="sms"
                  onChange={updateSubscriptions}
                />
                SMS Alert
                <br />
                <input
                  type="checkbox"
                  value="news"
                  onChange={updateSubscriptions}
                />
                Marketing Newsletter
                <br />
                <input
                  type="checkbox"
                  value="flyers"
                  onChange={updateSubscriptions}
                />
                Flyers <br />
                <button
                  onClick={popup}
                  style={{
                    backgroundColor: "#169BD5",
                    color: "#FFF",
                    padding: "5px 10px",
                    margin: "24px",
                  }}
                >
                  Submit
                </button>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h3>Two way data binding</h3>
                <input
                  className="inputPadding"
                  type="text"
                  placeholder="Enter value for two way binding"
                  value = {name}
                  onChange = {handleChange}
                />
                <br/>
                {name}
              </div>
            </div>
          </div>
        </div>
        <h4 style={{ display: "none" }}>Dialog Shown/Hidden with Logic</h4>
      </div>
    </div>
  );
}
