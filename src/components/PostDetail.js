import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import { useParams } from "react-router-dom";
import Radium from "radium";

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    firestore
      .collection("posts")
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log("snapshot", snapshot.data());
        setPost(snapshot.data());
      });
  }, []);

  return (
    <div className="post-detail">
      <h1 style={styles.heading}>{post.title}</h1>
      <p style={styles.postDetails}>{post.content}</p>
    </div>
  );
}

export default Radium(PostDetail);

const styles = {
  postDetails: {
    border: "1px solid #e1e1e1",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgb(244, 244, 244)",

    "@media(max-width: 720px)": {
      color: "blue",
    },
    color: "green",
  },
  heading: {
    textAlign: "center",
    margin: 0,
    ":hover": {
      fontSize: 40,
      color: "red",
      cursor: "pointer",
    },
  },
};
