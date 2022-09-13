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

    {posts.map((post , index)=>(
      <div className="post" key={`post-${index}`}>
        <Link to={`/post/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <PostSubTitle>{post.subTitle}</PostSubTitle>
      </div>
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