import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <button className="btn">
        <span className="loading loading-spinner"></span>
        loading
      </button>
    </div>
  );
};

export default Loading;
