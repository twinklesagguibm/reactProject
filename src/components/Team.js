import React, { useEffect, useState } from "react";
import "bootstrap-4-grid/css/grid.min.css";
import User from '../userImage.png';

export default function Team() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:4000/userdata");
      const result = await response.json();
      return result;
    };

    getData().then((list) =>{setList(list);});
  }, []);

  return (
    <div className="bootstrap-wrapper">
      <div className="app-container container">
        <div className="row ">
          <div
            className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 dashboard"
            style={{ marginLeft: "25%", marginTop: "-52%", marginBottom: "4%" }}
          >
              <h2 style={{ fontFamily: "Microsoft JhengHei", fontSize: " 32px" }}>
                Meet the Team
              </h2> 
              <hr/>
              <ul>
                {list.map(data => {
                  return <li style ={{listStyleType: 'none'}} key={data.id}>
                          <h3 style = {{fontSize:"18px" }} >
                          <img src = {User} style={{width: '28px', margin: '0px 10px -9px'}}/> {data.username}
                          </h3>
                         </li>
                })}
              </ul>
          </div>
        </div>
        <h4 style={{ display: "none" }}>Dialog Shown/Hidden with Logic</h4>
      </div>
    </div>
  );
}
