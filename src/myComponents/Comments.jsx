import React, { useContext, useState } from 'react';
import Comment from './Comment';
import useInputHook from '@/hooks/useInputHook';
import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/useAuth';
import { AuthContext } from '@/Context/AuthContext';


const Comments = () => {

    const [comment, setComment] = useInputHook("");
    const {login} = useAuth();
    const {user , comments} = useContext(AuthContext)
    console.log(comments)
    const handleCommentData = (e) => {
        e.preventDefault();
        login()
        console.log(comment)
    }

   

    return (
            <section className="bg-white w-full dark:bg-gray-900 py-8 lg:py-16 antialiased">
  <div className=" w-[90%]  mx-auto px-4">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Total Reviews (20)</h2>
    </div>
    <form className="mb-6">
        {/* to check why it is not working */}
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows="6" 
             value={comment}
             onChange={setComment}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <Button
         type="submit"
         onClick={handleCommentData}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center cursor-pointer rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Post comment
        </Button>
    </form>
    {
        comments.map((data)=> <Comment commentData={data}/>)
    }
  </div>
</section>
       
    );
};

export default Comments;