import React, { useState } from "react";
import Slider from "./Slider";
import "./Content.scss";
import Grid8 from "./Grid8";
import Grid7 from "./Grid7";
import Grid4 from "./Grid4";
import details from "../data/Details";

const Content = () => {
 

  const [position, setPosition] = useState("-580px");
  const [check, setcheck] = useState(true);
  const showmore = () => {
    if (check) {
      setPosition("0");
      setcheck(false);
    } else {
      setPosition("-580px");
      setcheck(true);
    }
  };

  return (
    <div className="content">
      <Slider />
      <Grid8 title={details[0].title} img={details[0].img} />
      <Grid8 title={details[1].title} img={details[1].img} />
      <Grid7 title={details[2].title} img={details[2].img} />
      <Grid8 title={details[3].title} img={details[3].img} />
      <Grid8 title={details[4].title} img={details[4].img} />
      <Grid8 title={details[5].title} img={details[5].img} />
      <Grid7 title={details[6].title} img={details[6].img} />
      <Grid8 title={details[7].title} img={details[7].img} />
      <Grid8 title={details[8].title} img={details[8].img} />
      <Grid4 title={details[9].title} img={details[9].img} />
      <Grid8 title={details[10].title} img={details[10].img} />
      <Grid7 title={details[11].title} img={details[11].img} />
      <Grid8 title={details[12].title} img={details[12].img} />
      <Grid8 title={details[13].title} img={details[13].img} />
      <Grid8 title={details[14].title} img={details[14].img} />
      <Grid8 title={details[15].title} img={details[15].img} />
      <Grid4 title={details[16].title} img={details[16].img} />
      <div className="flatoff" style={{ right: position }}>
        <img src="/assets/flatoff.png" alt="" onClick={showmore} />
      </div>
    </div>
  );
};

export default Content;
