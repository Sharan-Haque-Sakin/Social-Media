import React, { useState } from "react";
import Navbar from "./Navbar";
import { PostButton } from "./Styles/Pages";
import { useNavigate } from "react-router-dom";
import "./Styles/Posts.css";
export default function Post(props) {
  let navigate = useNavigate();

  const [content, setContent] = useState("");
  const [success, setSucces] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://mysocialmediabackend.onrender.com/posts/", {
      method: "POST",
      crossDomain: "true",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        content,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success) {
          setSucces(true);
        }
      });
  };

  return (
    <div className="postKoro">
      {success && navigate("/home")}
      {/* <Navbar /> */}
      <form
        action="post"
        style={{ backgroundColor: "#f5f5f5" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <textarea
          onChange={(e) => setContent(e.target.value)}
          cols={50}
          rows={8}
          maxLength={200}
          style={{
            border: "1px solid #e8e8e8",
            padding: "2rem",
            resize: "none",
            outline: "1px solid",
            borderRadius: "8px",

            fontFamily: "inherit",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "4rem",
          }}
          placeholder={"What's in your mind?🧐 "}
        ></textarea>
        {/* {console.log(content)} */}
        <input type="submit" value="Post" className="postBtn" />
      </form>
    </div>
  );
}
