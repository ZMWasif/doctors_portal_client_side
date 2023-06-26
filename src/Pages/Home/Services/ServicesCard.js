import React from "react";

const ServicesCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl pb-5 pt-5`}>
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{cardTitle}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default ServicesCard;
