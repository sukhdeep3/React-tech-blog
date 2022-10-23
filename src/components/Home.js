import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { firestore } from "../firebase";
import styled from 'styled-components';

const BlogHeading= styled.h1`
text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;

const PostSubTitle = styled.p`
font-size: 13px;`;

const Post = styled.div`
  border: 1px solid #e1e1e1;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;
  background-color: rgb(247, 244, 244);
  
  &:hover{
    border: 1px solid darkred;
  }

  h3{
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;
    color: darkred;
  }

  a{
    text-decoration: none;
  }

  @media( max-width: 800px) {
    border: 1px solid black;
  }
  `;

// const LinkTag = styled.anchor`
// color: yellow`;

function Home() {
  const [posts, setPosts]= useState([]);

  useEffect(()=>{
    firestore.collection('posts').get().then((snapshot)=>{
      const posts = snapshot.docs.map((doc)=>{
        // console.log('data', doc.id);
         console.log('data', doc.data());
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      
      console.log('posts', posts);
      setPosts(posts);
    })
  }, [])

  return <div className="">
    <BlogHeading>Tech Blog</BlogHeading>

    {/* <button className="createPostBtn">Home</button> */}
    <div id='blog-by'>Sukhdeep</div>
    {/* <LinkTag href='#'>Hello</LinkTag> */}

    {posts.map((post , index)=>(
      <Post className="post" key={`post-${index}`}>
        <Link to={`/post/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <PostSubTitle>{post.subTitle}</PostSubTitle>
      </Post>
    ))}
  </div>;
}

export default Home;

const styles ={
  heading:{
    marginTop: 30,
    fontSize: 56,
    color: 'red'
  }
}