import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import React from "react";

async function getBlog(id) {
  try {
    const blogsCollection = collection(db, "blogs");
    const blogSnapshot = await getDocs(blogsCollection);
    const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const blog: any = blogList.filter(blog => blog.id === id)[0];
    return { blog };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return { blog: null };
  }
}

export async function generateMetadata({ params }) {
  const { blog } = await getBlog(params.id);
  return {
    title: blog?.title || "Blog Not Found",
    description: blog?.desc || "",
  };
}

export default async function Viewblog({ params }) {
  const { blog } = await getBlog(params.id);

  if (!blog) {
    return (
      <div>
        <div className="mt-32 mb-12 flex justify-center min-h-screen">
          <h2 className="text-3xl break-words font-medium">Blog Not Found!</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="dark:bg-black/90 dark:text-white pb-12 flex justify-center">
        <div className="flex flex-col gap-4 min-w-[39vw] w-full px-10 lg:max-w-[50vw]">
          <h2 className="font-bold text-3xl break-words mt-28">{blog.title}</h2>
          <div className="flex items-center justify-center">
            <Image
              src={blog?.img}
              alt="blog_image"
              className="w-full h-full max-w-[600px] max-h-[400px]"
              width={500}
              height={500}
            />
          </div>
          <h2 className="text-base font-medium break-words">{blog.desc}</h2>
          <div
            className="text-[14px] blogdesc"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          />
        </div>
      </div>
    </div>
  );
}
