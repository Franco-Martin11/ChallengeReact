import React from "react";
import style from "../homeLayout.module.css";
type Props = {};

const HeadingText = (props: Props) => {
  return (
    <div className={style.headingText_container}>
      <p>Hi,</p>
      <h2>Welcome Back!</h2>
    </div>
  );
};

export default HeadingText;
