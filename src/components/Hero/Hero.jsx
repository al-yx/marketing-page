import React from "react";

import Button from "../../atoms/button";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="h-left">
        <div className="h-title">
          Making your mutual fund <br />
          investing more transparent
        </div>
        <div className="h-container">
          <div>
            Get your portfolio health check done <br />
          </div>
          <Button
            buttonClassName=""
            buttonText="Free Portfolio Health Check"
            buttonTextClassName=""
            onClick={() => console.log("Button clicked")}
          />
        </div>
      </div>

      <div className="h-right">
        <img src="./mobile-image.svg" alt="logo" width={200} />
      </div>
    </div>
  );
};

export default Hero;
