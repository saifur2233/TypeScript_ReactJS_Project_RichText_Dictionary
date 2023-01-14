import React from "react";

const Card = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
