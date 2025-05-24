import React, { use, useContext, useState } from "react";
import Comment from "./Comment";
import useInputHook from "@/hooks/useInputHook";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { AuthContext } from "@/Context/AuthContext";
import { GlobalContext } from "@/Context/GlobalContext";

const date = new Date();
const day = date.getDate();
const year = date.getFullYear();
const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);
const todayDate = `${month} ${day}, ${year}`;
const Comments = () => {
  const [comment, setComment] = useInputHook("");
  const { login } = useAuth();
  const { comments, isLoading, commentsLoading, setCommentsData } =
    useContext(AuthContext);
  const { user } = useContext(GlobalContext);

  console.log(user);

  const handleCommentData = (e) => {
    e.preventDefault();
    !user && login();

    const form = e.target;
    console.log(form);
    const newComment = {
      firstname: user?.displayName.split(" ")[0] || "Guest",
      comment: form.comment.value,
      avatar: user?.photoURL || "",
      publishedTime: todayDate,
    };
    if (user) {
      setCommentsData(newComment);
      form.reset();
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-slate-900 rounded-lg w-full  py-8 lg:py-16 antialiased">
      <div className=" w-[90%]  mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Total Reviews (20)
          </h2>
        </div>
        <form onSubmit={handleCommentData} className="mb-6">
          {/* to check why it is not working */}
          <div className="py-2 px-4 mb-4 bg-gray-800 rounded-lg rounded-t-lg border ">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="6"
              name="comment"
              className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none  text-white dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center cursor-pointer rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Post comment
          </Button>
        </form>
        <div className="space-y-4">
          {commentsLoading ? (
            <p>loading....</p>
          ) : (
            comments?.map((data, i) => <Comment key={i} commentData={data} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Comments;
