import { useState } from "react";
import { css } from "styled-components";
import { firestore } from "../firebase";
import { useFormInput } from "../hooks";
import styled from "styled-components";
// import classes from './Button.module.css';

const StyledButton = styled.button`
  height: 33px;
  background-color: ${(props) => (props.primary ? "#4caf50" : "blue")};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 6px;
  cursor: pointer;
  // ${(props) => css`
    // border: 4px solid ${props.bgColor};
    //
  `}
`;

function CreatePost() {
  const title = useFormInput("");
  const content = useFormInput("");
  const subTitle = useFormInput("");

  function handleSubmit(e) {
    e.preventDefault();

    // console.log("title", title);
    // console.log("subTitle", subTitle);
    // console.log("content", content);

    firestore.collection("posts").add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input value={title.value} onChange={title.onChange} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input value={subTitle.value} onChange={subTitle.onChange} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        {/* <StyledButton primary bgColor='blue'>Create Post</StyledButton> */}
        <StyledButton>Create Post</StyledButton>
      </form>
    </div>
  );
}

export default CreatePost;
