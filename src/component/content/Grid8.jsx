import React from "react";
import "./Content.scss";

function Grid8({title,img}) {
  return (
    <div className="Grid8">
      <h3>{title}</h3>
      <div className="Grid8ImgDiv">
        {img.map((img) => {
          return (
            <div>
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Grid8;
