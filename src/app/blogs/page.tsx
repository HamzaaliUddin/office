// components/BlogsClient.jsx
"use client";

import React, { useEffect, useState } from "react";
import BlogsPage from "@/components/Blogs";
import ScrollUp from "@/components/Common/ScrollUp";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";

async function fetchBlogs() {
  const blogsCollection = collection(db, "blogs");
  const blogSnapshot = await getDocs(blogsCollection);
  const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log(blogList)
  return blogList;
}

const BlogsClient = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      const data = await fetchBlogs();
      console.log(data);
      setBlogs(data);
    }
    getBlogs();
  }, []);

  console.log(blogs);

  return (
    <main>
      <ScrollUp />
      <BlogsPage blogs={blogs} />
    </main>
  );
};

export default BlogsClient;
