import React from "react";
import "./Header.css";
import Button from "../../atoms/button";
import { BUTTON_TYPES } from "../../atoms/button/button.constants";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src="./logo.svg" alt="logo" width={200} />
      </div>

      <div className="header-right">
        <Button
          buttonTextClassName="header-font"
          buttonType={BUTTON_TYPES.TERTIARY}
          buttonText={"Login"}
        />

        <Button
          buttonTextClassName="header-font"
          buttonType={BUTTON_TYPES.TERTIARY}
          buttonText={"Sign Up"}
        />
      </div>
    </div>
  );
};

export default Header;
