import useCurd from "@/hooks/useCurd";
import React, { use, useState } from "react";
import CommentInput from "../comments/CommentInput";
import { AuthContext } from "@/Context/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import CommentCard from "../comments/CommentCard";
import Loader from "../loader/Loader";
import { toast } from "sonner";
import Swal from "sweetalert2";

const Reviews = () => {
  const {} = useCurd();
  const [review, setReview] = useState("");
  const { user, isLoading } = use(AuthContext);

  const { create, read, deleteMutation } = useCurd("/reviews");

  const { data: reviews = [], isPending, isError } = read;
  const { mutateAsync: postReview } = create;
  const { mutate: deleteReview } = deleteMutation;

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };
  const handleReviewPost = async () => {
    if (!review) return;
    const reviewData = {
      user_name: user?.displayName,
      user_email: user?.email,
      photoURL: user?.photoURL,
      posted_on: new Date().toISOString(),
      comment: review,
    };

    try {
      const res = await postReview(reviewData);
      if (res.insertedId) {
        Swal.fire(
          "Review Submitted!!!",
          "Thanks For your valueable comment",
          "success"
        );
      }
    } catch (error) {
      console.error("Failed to post comment:", error);
    } finally {
      setReview("");
    }
  };

  const handleReviewDelete = (reviewId) => {
    console.log(reviewId);
    try {
      deleteReview(reviewId);
    } catch (error) {
      console.log(error);
    }
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-5xl text-white font-bold  mt-10 dark:text-primary border-l-6 border-primary pl-4">
          Reviews
        </h2>
        <p className="mt-1 text-gray-400">
          See why our clients keep coming back.
        </p>
      </div>
      <CommentInput
        comment={review}
        handleCommentChange={handleReviewChange}
        handleCommentPost={handleReviewPost}
      />

      <div className="space-y-5">
        {reviews?.map((review) => (
          <CommentCard
            key={review?._id}
            commentData={review}
            handleCommentDelete={handleReviewDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
