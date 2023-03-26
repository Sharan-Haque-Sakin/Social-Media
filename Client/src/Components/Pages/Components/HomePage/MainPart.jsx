import React, { useEffect, useState } from "react";
import Uploads from "./Feeds";

export default function MainPart() {
  const [Posts, setPosts] = useState();
  useEffect(() => {
    fetch("/posts")
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setPosts(jsonData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="PostsContainer">
      {Posts &&
        Posts.data.map((data, key) => {
          return (
            <Uploads
              key={key}
              time={data.time}
              userName={data.user.userName}
              content={data.content}
              date={data.date}
            />
          );
        })}
    </div>
  );
}
