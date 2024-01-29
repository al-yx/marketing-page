import React from "react";

import Button from "../../atoms/button";

import "./Choice.css";
import { BUTTON_TYPES } from "../../atoms/button/button.constants";

const Choice = () => {
  return (
    <div className="choice-main">
      <div className="heading">Explore clever Investment Choices</div>
      <div className="header-choice font-choice">
        <div className="choice-left font-choice">
          <div>Mirae Assest Finanical Services</div>
          <Button buttonText="Bought 1500 Shares" />
          <div>of</div>
          <div>
            <img src="./Yes_Bank_logo.png" alt="logo" width={50} />
            Yes Bank
          </div>
        </div>
        <div>
          <img src="./pie_chart.png" alt="logo" width={600} />
        </div>
      </div>

      <div className="choice-button">
        <Button
          buttonType={BUTTON_TYPES.SECONDARY}
          buttonText={"Get on a Discovery call"}
        />
        {/* <button className="button-green"> */}
        {/* <img src="./Ringer Volume.png" alt="logo" width={50} /> */}
        {/* </button> */}
      </div>
    </div>
  );
};

export default Choice;
