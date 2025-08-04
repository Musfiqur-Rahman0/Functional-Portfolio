import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SkillCardSkeleton = () => {
  return (
    <div className="relative w-full h-full">
      <Card className="relative w-full max-w-md shadow-xl h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Skeleton className="w-20 h-20 rounded" />
            <Skeleton className="h-6 w-40" />
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-2" />
          <Skeleton className="h-4 w-4/6 mb-4" />

          <div className="flex justify-between items-center text-xs mt-3">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-36" />
            </div>
            <Skeleton className="h-4 w-12" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillCardSkeleton;
