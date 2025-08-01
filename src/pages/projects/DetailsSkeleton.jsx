import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const DetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 gap-5 py-16 w-full">
      <div className="col-span-2 space-y-20">
        {/* Main Section */}
        <div className="space-y-7">
          {/* Image */}
          <figure>
            <Skeleton className="w-full h-[400px] rounded-md border border-gray-500" />
          </figure>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-5">
            <Skeleton className="h-10 w-40 rounded-md" />
            <Skeleton className="h-10 w-40 rounded-md" />
          </div>

          {/* Title & Description */}
          <div className="space-y-7">
            <div className="space-y-3">
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-[90%]" />
              <Skeleton className="h-6 w-[80%]" />
            </div>

            {/* Key Features */}
            <div className="mt-4">
              <Skeleton className="h-8 w-60 mb-3" />
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-5 w-64" />
                  </div>
                ))}
              </div>
            </div>

            {/* Purpose */}
            <div className="space-y-2">
              <Skeleton className="h-8 w-72" />
              <Skeleton className="h-6 w-[80%]" />
              <Skeleton className="h-6 w-[70%]" />
            </div>

            {/* Deployment */}
            <div className="space-y-2">
              <Skeleton className="h-8 w-72" />
              <Skeleton className="h-6 w-[60%]" />
              <Skeleton className="h-6 w-[50%]" />
            </div>

            {/* Tech Stack */}
            <div>
              <Skeleton className="h-8 w-60 mb-4" />
              <div className="flex flex-wrap gap-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-8 w-20 rounded-md" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="space-y-5">
          <Skeleton className="h-8 w-80" />
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-[200px] w-full rounded-lg border border-gray-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
