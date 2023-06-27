import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="card-title justify-center text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slots Available !</span>
          )}
        </p>
        <p className="uppercase">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <button
            disabled={slots.length === 0}
            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
