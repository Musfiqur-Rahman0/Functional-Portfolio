import { Button } from "@/components/ui/button";
import useCurd from "@/hooks/useCurd";
import React, { use, useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useParams } from "react-router";
import DetailsSkeleton from "./DetailsSkeleton";

import CommentInput from "@/components/comments/CommentInput";
import CommentCard from "@/components/comments/commentCard";
import { AuthContext } from "@/Context/AuthContext";
import { QueryClient, useMutation } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { toast } from "sonner";

const DetailsPage = () => {
  const { projectId } = useParams();
  const { user, isLoading } = use(AuthContext);
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  const { read } = useCurd(`/project/${projectId}`);
  const { data: response, isPending, isError } = read;
  const [comment, setComment] = useState("");
  const axiosSecure = useAxiosSecure();
  const queryClient = new QueryClient();

  const { updateWithPatch } = useCurd(`/project/comment`, {
    readEnabled: false,
  });

  const handleCommentPost = () => {
    if (!projectId || !comment) return;

    const commentsData = {
      user_name: user?.displayName,
      user_email: user?.email,
      photoURL: user?.photoURL,
      posted_on: new Date().toISOString(),
      comment,
    };

    try {
      const res = updateWithPatch.mutate({
        id: projectId,
        updatedItems: commentsData,
      });

      setComment("");
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const { mutateAsync: deleteComment } = useMutation({
    mutationFn: async ({ projectId, commentId }) => {
      const res = await axiosSecure.patch(
        `/project/${projectId}/comments/${commentId}`
      );
      return res.data;
    },
    onSuccess: () => {
      toast.success("deleted!!!");
      // TODO I HAVE TO MAKE THIS REFECTCH WORK PERFECTLY.
      queryClient.invalidateQueries(["project", projectId]);
    },
  });
  const handleCommentDelete = async (projectId, commentId) => {
    console.log(projectId, commentId);
    const res = await deleteComment({ projectId, commentId });
    console.log(res);
  };

  useEffect(() => {
    if (response) {
      setProject(response);
      setLoading(false);
    }
  }, [response, isPending]);

  return loading ? (
    <DetailsSkeleton />
  ) : (
    <div className="max-w-7xl mx-auto grid grid-cols-2 gap-5 py-16">
      <div className="col-span-2 space-y-20">
        <div className="space-y-5">
          <figure>
            <img
              src={project?.projectImage}
              alt={project?.name}
              className="w-full  rounded-md border border-gray-200"
            />
          </figure>
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center gap-1 bg-secondary  hover:bg-secondary/90 text-foreground px-4 py-2 rounded-md">
              <a
                href={project?.live}
                target="_blank"
                rel="noopener noreferrer"
                className=" mr-2"
              >
                Preview Live
              </a>
              <MdOutlineArrowOutward className="text-2xl " />
            </div>
            <div className="flex items-center gap-1 bg-secondary hover:bg-secondary/90 text-foreground px-4 py-2 rounded-md">
              <a
                href={project?.github}
                target="_blank"
                rel="noopener noreferrer"
                className=" mr-2"
              >
                Github
              </a>
              <MdOutlineArrowOutward className="text-2xl " />
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-5xl font-semibold">Project-{project?.name}</h2>
            <p className="text-2xl text-justify">{project?.description}</p>
            <div>
              <h4 className="text-3xl font-bold">Key Features</h4>
              <ul className="mt-3">
                {project?.features?.map((f, i) => (
                  <li
                    key={i}
                    class="flex items-center space-x-3 rtl:space-x-reverse"
                  >
                    <svg
                      class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                    <span className="text-lg">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-3xl font-bold">Purpose of this project </h4>
              <p className="text-xl max-w-[80%]">
                {project?.purpose} And {project?.projectGoals}
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-3xl font-bold">Deployment process</h4>
              <p className="text-xl max-w-[60%]">
                {project?.developmentProcess}
              </p>
            </div>
            <div className=" ">
              <h2 className="text-3xl font-semibold">Tech Stack</h2>
              <div className="flex  gap-4 mt-4">
                {project?.technologies?.map((tech, index) => (
                  <Button
                    key={index}
                    dis
                    className="cursor-pointer bg-secondary text-foreground hover:bg-secondary/90"
                  >
                    {tech}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5 ">
          <h2 className="text-4xl font-semibold ">Project gallery</h2>
          <div className="grid grid-cols-3 gap-4 ">
            {project?.detailImages?.map((image, index) => (
              <img
                key={index}
                src={image}
                className="h-[200px] border border-gray-200 w-full object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold">Total Comments : </h3>{" "}
            <span className="font-bold text-xl">
              {project?.comments?.length}
            </span>
          </div>

          <CommentInput
            handleCommentPost={handleCommentPost}
            handleCommentChange={handleCommentChange}
            comment={comment}
          />
        </div>
        <div className="space-y-5">
          {project?.comments?.map((comment) => (
            <CommentCard
              key={comment._id}
              commentData={comment}
              handleCommentDelete={handleCommentDelete}
              projectId={projectId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
