/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ReviewSlider from "./Helper/ReviewSlider";

const Reviews = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="text-center">
        <p className="heading__mini">Comments</p>
        <h1 className="heading__primary">
          Read <span className="text-yellow-300">Comments</span> and Know about me
        </h1>
      </div>
      <div className="w-[80%] pt-[3rem] md:pt-[5rem] mx-auto">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default Reviews;
