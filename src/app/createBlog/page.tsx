"use client";
import { db, storage } from "@/utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
const ReactQuill =
  typeof window !== "object" ? () => false : require("react-quill");

export default function Admin() {
  const [title, setTitle] = useState("");
  const [dec, setDec] = useState("");
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  const onFileInputChange = (e) => {
    setImg(e.target.files[0]);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const addBlog = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "blogs"), data);
      return docRef.id;
    } catch (error) {
      throw new Error("Error adding blog post");
    }
  };

  const submit = async () => {
    const storageRef = ref(storage, title);
    setLoading(true);

    await uploadBytes(storageRef, img).then(async (snapshot) => {
      const link = await getDownloadURL(snapshot.ref);
      const createdAt = new Date().getTime();

      try {
        const docId = await addBlog({
          title,
          dec,
          content,
          img: link,
          createdAt,
        });
        console.log("Blog added with ID:", docId);
        setTitle("");
        setDec("");
        setContent("");
        setImg(null);
        setLoading(false);
        router.push(`/blogs`);
      } catch (error) {
        console.error(error);
        setLoading(false);
        // Handle error, maybe show a message to the user
      }
    });
  };

  useEffect(() => {
    if (
      status === "authenticated" &&
      !process.env.NEXT_PUBLIC_ADMINS.includes(session?.user?.email)
    ) {
      router.push(`/`);
    }
    // eslint-disable-next-line
  }, [router, status]);

  return (
    <>
      {status === "authenticated" &&
      process.env.NEXT_PUBLIC_ADMINS.includes(session?.user?.email) ? (
        <div className="mb-10 flex flex-col justify-center gap-8 px-4 lg:px-40">
          <div className="mt-28">
            <p>Title</p>
            <input
              placeholder="Enter your title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-b border-black outline-none"
            />
          </div>

          <div>
            <p>Description</p>
            <textarea
              className="w-full resize-y border border-black p-4 outline-none"
              placeholder="Enter your description"
              value={dec}
              onChange={(e) => setDec(e.target.value)}
              rows={10}
            />
          </div>

          <div>
            <p>Image</p>
            {img && (
              <Image
                src={URL.createObjectURL(img)}
                alt=""
                width={200}
                height={200}
              />
            )}
            <input type="file" accept="image/*" onChange={onFileInputChange} />
          </div>

          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={content}
            onChange={setContent}
          />

          <button
            disabled={!title || !dec || !img || !content || loading}
            className="w-fit cursor-pointer rounded bg-[#2f2f2f80] px-10 py-2 disabled:cursor-not-allowed"
            onClick={submit}
          >
            {!loading ? "Submit" : "Adding..."}
          </button>
        </div>
      ) : (
        <div className="flex min-h-[80vh] min-w-[80vw] items-center justify-center gap-8">
          <h2>Sign to access the dashboard</h2>
          {/* <Link
            href="/api/auth/signin"
            className="bg-[#0d1296] no-underline w-fit border rounded-[5px] text-white text-lg font-bold px-4 py-2 "
          >
            Sign in
          </Link> */}
          <button
            onClick={() => signIn("google")}
            className="w-fit rounded-[5px] border bg-[#0d1296] px-4 py-2 text-lg font-bold text-white no-underline "
          >
            Sign in
          </button>
        </div>
      )}
    </>
  );
}
