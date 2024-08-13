import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Spin } from "antd";

function BlogsPage({ blogs }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Assuming blogs are fetched successfully
  }, [blogs]);

  return (
    <section className="py-32">
      <div>
        <h3 className="text-center text-[28px] font-bold capitalize leading-[120%] text-[#000] md:text-[48px]">
          Blogs
        </h3>
      </div>

      <div className="flex flex-col items-start justify-center px-10 md:flex-col lg:flex-col xl:flex-row 2xl:flex-row">
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3 md:pr-10">
          {loading ? (
            <>
              <div></div>
              <Spin size="large" />
              <div></div>
            </>
          ) : (
            blogs.map((blog: any, index: any) => (
              <div
                className="flex w-full flex-col items-center flex-grow"
                key={index}
              >
                <div className="w-full cursor-pointer" onClick={() => {
                  router.push(`/blog/${blog.id}`);
                }}>
                  <Image
                    alt="bloging"
                    width={600}
                    height={100}
                    src={blog.img}
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-full bg-[#F1F1F3] px-5 py-6 flex flex-col justify-between h-[280px]">
                  <div onClick={() => {
                  router.push(`/blog/${blog.id}`);
                }}>
                    <h2 className="cursor-pointer text-[20px] font-bold leading-[120%] tracking-[0.4px] text-[#000]">
                      {blog?.title}
                    </h2>
                  </div>
                  {/* <div className="flex items-center justify-between py-3">
                    <p className="text-[12px] leading-[130%] tracking-[0.24px] text-[#00000099]">
                      {blog && new Date(blog.createdAt).toDateString()
                        ? new Date(blog.createdAt).toDateString()
                        : "10/12/2000"}
                    </p>
                  </div> */}
                  <p className="font-blogFont line-clamp-3 min-h-[45px] break-words mt-3 text-[14px] font-light text-[#686868] dark:text-white/70 lg:text-[15px]">
                    {blog && blog.dec ? blog.dec : "Description"}
                  </p>

                  <span className="mt-auto text-[14px] font-semibold cursor-pointer text-[#686868] dark:text-white/70 lg:text-[15px]" onClick={() => {
                  router.push(`/blog/${blog.id}`);
                }}>
                    READ MORE
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogsPage;
