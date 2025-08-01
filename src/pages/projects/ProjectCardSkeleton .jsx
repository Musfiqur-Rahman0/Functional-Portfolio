import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";

const ProjectCardSkeleton = ({ reversed }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-5 grid md:grid-cols-3 gap-8 border-t border-[#693B93] bg-gradient-to-br from-[#2C1250] to-[#2C1250] backdrop-blur-sm p-3 md:p-8 rounded-2xl shadow-xl shadow-slate-900/30 w-full "
    >
      {/* Skeleton Image */}
      <div
        className={`w-full h-full overflow-hidden rounded-lg flex items-center justify-center ${
          reversed ? "order-2 md:order-2" : "order-1 md:order-1"
        }`}
      >
        <Skeleton className="w-full md:w-[400px]  h-[200px] md:h-[100%] rounded-lg bg-gray-400" />
      </div>

      {/* Skeleton Content */}
      <div
        className={`p-3 w-full md:col-span-2 space-y-3 md:space-y-5 ${
          reversed ? "order-1 md:order-1" : "order-2 md:order-2"
        }`}
      >
        <div className="flex items-center gap-5">
          <Skeleton className="h-6 w-20 rounded-full bg-primary/50" />
          <Skeleton className="h-6 w-20 rounded-full bg-primary/50" />
        </div>
        <div className="space-y-3 py-2">
          <Skeleton className="h-6 w-3/4 rounded-full bg-gray-400" />
          <Skeleton className="h-4 w-full rounded-full bg-gray-400" />
          <Skeleton className="h-4 w-5/6 rounded-full bg-gray-400" />
        </div>
        <Skeleton className="h-10 w-32 rounded-full bg-primary/50" />
      </div>
    </motion.div>
  );
};

export default ProjectCardSkeleton;
