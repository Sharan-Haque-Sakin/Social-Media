import React from "react";

export default function ShowErrors(props) {
  return (
    <>
      {props.Error.errors &&
        props.Error.errors.map((ele, key) => {
          if (ele.param == props.param) {
            return <p key={key}>{ele.msg}</p>;
          } else {
            return;
          }
        })}
    </>
  );
}
