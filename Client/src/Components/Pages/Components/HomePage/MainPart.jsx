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
      });
  }, []);

  return (
    <div className="PostsContainer">
      {Posts &&
        Posts.data.map((data, key) => {
          return (
            <Uploads
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
