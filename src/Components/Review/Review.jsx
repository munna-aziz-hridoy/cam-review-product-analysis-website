import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="container mx-auto">
      <h2 className="text-5xl text-gray-700 font-bold text-center mt-16">
        Customer <span className="text-[#01acfa] ">Reviews</span>
      </h2>
      <p className="my-10 text-2xl text-gray-500 font-medium text-center">
        Here is all customers review about{" "}
        <span className="font-semibold text-[#01acfa] uppercase">
          canon eos 850d.
        </span>
      </p>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
        {reviews.map((reviewItem) => (
          <ReviewCard key={reviewItem.id} reviewData={reviewItem} />
        ))}
      </div>
    </div>
  );
};

export default Review;
