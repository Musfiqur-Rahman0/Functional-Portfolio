import React from "react";

const Comment = ({ commentData }) => {
  const { firstname, comment, avatar, publishedTime } = commentData;

  // console.log(commentData, firstname);

  return (
    <article className="p-6 text-base  rounded-lg ">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm  font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src={avatar}
              alt="Michael Gough"
            />
            {firstname}
          </p>
          <p className="text-sm ">
            <time dateTime="2022-02-08" title="February 8th, 2022">
              {publishedTime}
            </time>
          </p>
        </div>
        <button
          id="dropdownComment1Button"
          data-dropdown-toggle="dropdownComment1"
          className="inline-flex cursor-pointer items-center p-2 text-sm font-medium text-center rounded-full"
          type="button"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{comment}</p>
    </article>
  );
};

export default Comment;
