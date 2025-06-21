import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AuthContext } from "@/Context/AuthContext";
import { GlobalContext } from "@/Context/GlobalContext";
import { getReadAbleDate } from "@/lib/utils";
import React, { use, useEffect, useRef, useState } from "react";

const Comment = ({ commentData }) => {
  const { firstname, comment, avatar, publishedTime } = commentData;
  const [action, setAction] = useState("");
  const { user } = use(GlobalContext);
  // console.log(commentData, firstname);


  const currentUserName = user.displayName.split(" ")[0];
  const isCommentAdmin = currentUserName === firstname;
  const commentRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);



  const handleEdit = () => {
    setIsEditing(true)
    console.log("editing");
    setTimeout(() => {
      commentRef.current.focus();
    }, 0);
  };
  

  

  const commentsOn = getReadAbleDate(publishedTime);
  console.log(commentsOn)
  

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
              {commentsOn}
            </time>
          </p>
        </div>
        {isCommentAdmin && (
          <button
            id="dropdownComment1Button"
            data-dropdown-toggle="dropdownComment1"
            className="inline-flex cursor-pointer items-center p-2 text-sm font-medium text-center rounded-full"
            type="button"
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Update Comment</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  
                >
                  <DropdownMenuRadioItem onClick={handleEdit} value="edit">
                    Edit
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="delete">
                    Delete
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="sr-only">Comment settings</span>
          </button>
        )}
      </footer>

      <input
        ref={commentRef}
        defaultValue={comment}
        readOnly={isEditing ? false : true}
        className="text-gray-500 dark:text-gray-400 outline-none block w-full"
      />
      {isEditing && <Button className="mt-5 text-xs " variant="outline">Confirm </Button>}
    </article>
  );
};

export default Comment;
