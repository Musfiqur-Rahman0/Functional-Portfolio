import useAuth from "@/hooks/useAuth";
import React from "react";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { getTime } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react"; // three-dot icon

const CommentCard = ({ commentData, handleCommentDelete, projectId }) => {
  const { user } = useAuth();
  const isCommentOwner = commentData?.user_email === user?.email;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Avatar
          className={"size-14 bg-primary flex items-center justify-center"}
        >
          <AvatarImage
            src={commentData?.photoURL}
            alt={commentData?.user_name}
            className=" rounded-full object-cover"
          />
          <AvatarFallback className={" bg-primary text-balance"}>
            {commentData?.user_name ? commentData?.user_name?.charAt(0) : "U"}
          </AvatarFallback>
        </Avatar>

        <div className="space-y-2">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <h4>{commentData.user_name}</h4>
            <p>
              {commentData?.posted_on ? getTime(commentData?.posted_on) : ""}
            </p>
          </div>
          <p className="text-xl font-semibold text-gray-200">
            {commentData.comment}
          </p>
        </div>
      </div>
      {isCommentOwner && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-md hover:bg-muted transition">
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem
              onClick={() =>
                !projectId
                  ? handleCommentDelete(commentData._id)
                  : handleCommentDelete(projectId, commentData._id)
              }
              className="text-red-600 cursor-pointer"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default CommentCard;
