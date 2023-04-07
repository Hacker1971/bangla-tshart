import React from "react";

const Order = ({ shart, eventButttonAdd }) => {
  const { picture, name, gender, _id } = shart;

  return (
    <div className="card w-72 bg-base-100 h-96 shadow-2xl">
      <figure>
        <img src={picture} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Gender: {gender}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => eventButttonAdd(shart)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
