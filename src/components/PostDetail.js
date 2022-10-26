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
        setPost(snapshot.data());
      });
  }, [postId]);

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
    padding: 15,
    borderRadius: 5,
    backgroundColor: "lightgrey",
    fontSize: 20,

    "@media(max-width: 720px)": {
      color: "blue",
    },
    color: "green",
  },
  heading: {
    textAlign: "center",
    color: 'darkred',
    margin: 0,

    ":hover": {
      fontSize: 40,
      cursor: "pointer",
    },
  },
};
