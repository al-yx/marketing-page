import React from "react";
import cx from "classnames";
import { noop } from "lodash";

import "./button.css";
import { BUTTON_TYPES, BUTTON_TYPE_VS_CLASS_NAME } from "./button.constants";

const Button = (props) => {
  const {
    buttonClassName,
    buttonText,
    buttonTextClassName,
    onClick,
    buttonType,
    buttonImage,
  } = props;
  const buttonTypeClassName = BUTTON_TYPE_VS_CLASS_NAME[buttonType];

  return (
    <button
      className={cx("button", buttonTypeClassName, buttonClassName)}
      onClick={onClick}
    >
      {/* {buttonImage && <Image></Image>} */}
      <div className={cx("font-button", buttonTextClassName)}>{buttonText}</div>
    </button>
  );
};

Button.defaultProps = {
  buttonType: BUTTON_TYPES.PRIMARY,
  buttonClassName: "",
  buttonText: "",
  buttonTextClassName: "",
  onClick: noop,
  //   buttonImage="",
};

export default Button;
