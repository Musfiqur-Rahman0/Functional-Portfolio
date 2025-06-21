import React, { use, useContext, useState } from "react";
import Comment from "./Comment";
import useInputHook from "@/hooks/useInputHook";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { AuthContext } from "@/Context/AuthContext";
import { GlobalContext } from "@/Context/GlobalContext";
import { useLoaderData } from "react-router-dom";

const currentTime = new Date();

const Comments = () => {
  // const [comment, setComment] = useInputHook("");
  const { login } = useAuth();
  const { comments, isLoading, commentsLoading, setCommentsData } =
    useContext(AuthContext);
  const { user } = useContext(GlobalContext);
  const initialCommentsData = useLoaderData();
  const [commentsInfo, setCommentsInfo] = useState(initialCommentsData)




  const handleCommentData = (e) => {
    e.preventDefault();
    !user && login();

    const form = e.target;
 
    const newComment = {
      firstname: user?.displayName.split(" ")[0] || "Guest",
      comment: form.comment.value || "Guest",
      avatar: user?.photoURL || "https://i.ibb.co/qtVNNDH/user-Avatar.png",
      publishedTime: currentTime ,
      userEmail : user?.email
    };
   

    fetch("https://server-mpqtonacd-musfiqur-rahman0s-projects.vercel.app/reviews", {
      method :  "POST",
      headers : {
        'content-type' : 'application/json'
      },
      body   : JSON.stringify(newComment)
    }).then(res => res.json()).then(data=> {
      console.log(data)
    })
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
          {commentsLoading ? 
            <p>loading....</p>
           : <>
           {
            commentsInfo?.map(comment => <Comment  commentData={comment} key={comment._id} />)
           }
           </>}

        </div>
      </div>
    </section>
  );
};

export default Comments;
