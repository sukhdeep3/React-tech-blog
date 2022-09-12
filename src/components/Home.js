import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { firestore } from "../firebase";

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
    <h1>Tech Blog</h1>

    <div id='blog-by'>Sukhdeep</div>

    {posts.map((post , index)=>(
      <div className="post" key={`post-${index}`}>
        <Link to={`/post/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <p>{post.subTitle}</p>
      </div>
    ))}
  </div>;
}

export default Home;