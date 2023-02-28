import React from 'react'
import "./Content.scss";


function Grid7({title,img}) {
  return (
    <div className="Grid7">
      <h3>{title}</h3>
      <div className="Grid7ImgDiv">
        {img.map((img) => {
          return (
            <div>
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Grid7