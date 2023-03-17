import React from "react";
import { Posts, UserName, Time, Feeds, Info } from "../../Styles/Pages";
import ProfilePic from "../../../../ProfileImg/profile.png";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

import "../../../../index.css";

const Uploads = (props) => {
  // EventListeners
  let likes = 0;
  const handleLike = () => {
    // console.log("Like");\
    likes++;
  };

  const handleDislike = () => {
    console.log("Dislike");
  };

  return (
    <Posts>
      <div className="profilePic">
        <Info>
          <img
            src={ProfilePic}
            alt=""
            style={{
              width: "2rem",
              marginBottom: "-31px",
              marginLeft: "-19px",
              borderRadius: "21px",
              // border: "1px solid purple",
            }}
          />
          <UserName>{props.userName}</UserName>
          <Time>{`${props.time}     ${props.date}`}</Time>
          <Time></Time>
        </Info>
        <Feeds>{props.content}</Feeds>
        <br />
        <br />
        <span
          style={{
            display: "flex",
            margin: "auto",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <FiThumbsUp
            className="icons picons"
            style={{ fontSize: "22px", color: "#0437ff" }}
            onClick={() => handleLike()}
          />{" "}
          <FiThumbsDown
            className="icons picons"
            style={{
              fontSize: "22px",
              marginLeft: "2rem",
              color: "#0437ff",
              cursor: "pointer",
            }}
            onClick={() => handleDislike()}
          />
        </span>
      </div>
      {/* <br /> */}
      <p style={{ fontSize: "15px" }}>{likes}</p>
    </Posts>
  );
};

export default Uploads;
