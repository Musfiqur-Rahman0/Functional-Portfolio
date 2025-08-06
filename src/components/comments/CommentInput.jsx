import React, { use, useEffect, useRef, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { AuthContext } from "@/Context/AuthContext";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import useCurd from "@/hooks/useCurd";

const CommentInput = ({ handleCommentPost, handleCommentChange, comment }) => {
  const { isLoading, user } = use(AuthContext);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const inputRef = useRef(null);

  const { updateWithPatch } = useCurd(`/project/comment`, {
    readEnabled: false,
  });

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsInputFocused(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex items-center gap-4">
      {isLoading || !user || !user.photoURL ? (
        <Skeleton className="h-10 w-10 rounded-full animate-pulse" />
      ) : (
        <Avatar className={"size-16 bg-primary"}>
          <AvatarImage
            src={user?.photoURL}
            alt={user?.displayName}
            className=" rounded-full object-cover"
          />
          <AvatarFallback className={" bg-primary text-balance"}>
            {user?.displayName ? user?.displayName?.charAt(0) : "U"}
          </AvatarFallback>
        </Avatar>
      )}

      <div className="w-full relative" ref={inputRef}>
        <motion.input
          onFocus={() => setIsInputFocused(true)}
          value={comment}
          onChange={handleCommentChange}
          className={
            "border-none w-full outline-none focus:outline-none  py-2 text-xl font-semibold "
          }
        />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInputFocused ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-center"
        />
        {isInputFocused && (
          <div className="flex items-center gap-3 absolute right-0 mt-3">
            <Button className={""} variant={"ghost hover:bg-none"}>
              Cencel
            </Button>
            <Button disabled={!comment} onClick={handleCommentPost}>
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentInput;
