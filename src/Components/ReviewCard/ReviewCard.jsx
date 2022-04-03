import React from "react";

const ReviewCard = ({ reviewData }) => {
  const { name, image, text, rating } = reviewData;
  return (
    <div className="flex flex-col justify-start items-center p-6 shadow-xl rounded-xl gap-4">
      <div className="flex gap-3 items-center w-full">
        <div className="w-16 h-16 rounded-full p-2">
          <img src={image} alt="" className="w-full rounded-full" />
        </div>
        <div>
          <p className="font-bold text-gray-500 text-xl">{name}</p>
          <p className="font-semibold text-gray-500">
            Rating: <span className="font-bold text-[#01acfa]">{rating}</span>
          </p>
        </div>
      </div>
      <p className="my-6 text-gray-500 font-medium text-lg">{text}</p>
    </div>
  );
};

export default ReviewCard;
