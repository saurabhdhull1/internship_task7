import React, { useEffect, useState } from "react";
import "./Profile.scss";

function Theme() {

  const [mode, setmode] = useState(true);
  const [changetheme, setchangetheme] = useState("light-mode");
  const [leftpos, setleftpos] = useState("0px");
  const [rightpos, setrightpos] = useState("auto");


  const toggle = () => {
    if (mode) {
        setleftpos("auto")
        setrightpos("0px")
        setmode(false)
        setchangetheme("dark-theme")
    }else{
        setleftpos("0px")
        setrightpos("auto")
        setmode(true)
        setchangetheme("light-mode")
    }
  };
  useEffect(() => {
    document.body.className=changetheme;
  }, [changetheme]);

  return (
    <div className="mytheme">
      <div style={{left:leftpos , right:rightpos}} onClick={toggle}></div>
    </div>
  );
}

export default Theme;
