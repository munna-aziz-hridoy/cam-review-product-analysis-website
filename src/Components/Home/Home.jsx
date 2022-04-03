import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../assests/image/banner.png";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";
const Home = () => {
  const [reviews, setReviews] = useReviews();
  const firstThreeReview = reviews.slice(0, 3);
  const navigate = useNavigate();
  const handleShowAll = () => {
    navigate("/review");
  };
  return (
    <div className="container mx-auto">
      <div className="container mx-auto md:flex gap-16 justify-center items-center w-full my-16 p-5">
        <div className="md:w-[60%] flex justify-center items-center flex-col md:block">
          <h1 className="text-7xl capitalize text-gray-600 font-bold my-8">
            your choise<br></br>
            <span className="text-[#01acfa]">our review</span>
          </h1>
          <p className="text-gray-500">
            Welcome to{" "}
            <span className="text-[#01acfa] uppercase font-semibold">
              cam-reviews.
            </span>{" "}
            Want to buy a camera, but can't make any decision? We are here to
            made a right choise for you. Here we collect all kind of cutomer
            reviews (including positive and negative) about any camera you want.
          </p>
          <button className="w-48 h-12 bg-[#01acfa] hover:bg-transparent text-slate-100 hover:text-gray-600 transition font-semibold text-xl my-5 rounded-md shadow-md border-2 border-[#01acfa]">
            Preview Camera
          </button>
        </div>
        <div className="md:w-[40%]">
          <img src={banner} className="rounded-xl shadow-2xl mx-auto" alt="" />
        </div>
      </div>
      <div className="my-20">
        <h2 className="text-gray-600 text-3xl font-bold text-center">
          What they says about{" "}
          <span className=" text-[#01acfa] uppercase">canon eos 850d.</span>
        </h2>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
          {firstThreeReview.map((reviewItem) => (
            <ReviewCard key={reviewItem.id} reviewData={reviewItem} />
          ))}
        </div>
        <div className="flex justify-center items-end my-10">
          <button
            className="w-48 h-12 mx-auto bg-[#01acfa] hover:bg-transparent text-slate-100 hover:text-gray-600 transition font-semibold text-xl my-5 rounded-md shadow-md border-2 border-[#01acfa]"
            onClick={handleShowAll}
          >
            Show all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
