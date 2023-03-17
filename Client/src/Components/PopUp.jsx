import React from "react";
import "./css/PopUp.css";
export default function PopUp(props) {
  let check;
  check = props.success === true ? <p>{props.msg}</p> : null;
  return (
    <>
      <div className="popup">
        {/* <p>{props.msg}</p> */}
        {/* <p>Your account was successfully created!</p> */}
      </div>
    </>
  );
}
