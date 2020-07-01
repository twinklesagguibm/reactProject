import React, { useEffect, useState } from "react";
import "bootstrap-4-grid/css/grid.min.css";
import User from '../userImage.png';
import { motion } from "framer-motion"

export default function Team() {
  const [list, setList] = useState([]);
  const [move, setMove] = useState({y:20})

  
  const clickevent = ()=>{
    setMove({y:80})
  }
    
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
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 dashboard"
            style={{ marginLeft: "25%", marginTop: "-51%", marginBottom: "4%" }}>
              <h2 style={{ fontFamily: "Microsoft JhengHei", fontSize: " 32px" }}>
                Meet the Team
              </h2> 
              <hr/>
              <div className = "row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
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
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <motion.div onClick={clickevent}
                    style={{
                      border: "solid 1px",
                      width: "100px",
                      height: "100px",
                      backgroundColor: "antiquewhite",
                    }}
                    animate={{
                      x: 0,
                      y: move.y,
                      scale: 1,
                      rotate: 0,
                    }}
                  />
              </div>
              </div>
          </div>
        </div>
        <h4 style={{ display: "none" }}>Dialog Shown/Hidden with Logic</h4>
      </div>
    </div>
  );
}
