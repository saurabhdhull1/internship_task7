import React from "react";
import "./Content.scss";

function Grid4({title,img}) {
  return (
    <div className="Grid4">
      <h3>{title}</h3>
      <div className="Grid4ImgDiv">
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

export default Grid4;
