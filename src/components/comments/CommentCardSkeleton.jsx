import React from "react";
import { Skeleton } from "../ui/skeleton";

const CommentCardSkeleton = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-5 w-full">
        <Skeleton className="size-14 rounded-full aspect-square" />

        <div className="space-y-2 w-full">
          <div className="flex items-center gap-3 text-sm">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-14" />
          </div>

          <Skeleton className="h-5 w-1/2" />
        </div>
      </div>

      <Skeleton className="h-8 w-8 rounded-md" />
    </div>
  );
};

export default CommentCardSkeleton;
