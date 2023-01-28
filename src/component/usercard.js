import React, { Component } from "react";
import "./usercard.css";

function Card(props) {
  const data = props.Data;
  {
    data && console.log(data.data.data);
  }
  return (
    <>
      <div >
        {props.status ?
          data.data.data.map((items, index) => {
            return (
              <div id="card" key={index}>
                <div>
                  <img className="avatar-img" src={items.avatar} />
                </div>
                <div>
                    <h3>{`${items.first_name}  ${items.last_name}`}</h3>
                    <h5>{`${items.email}`}</h5>
                </div>
              </div>
            );
          }):<div className="loader"></div>}
      </div>
    </>
  );
}

export default Card;
