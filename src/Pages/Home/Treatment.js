import React from "react";
import treatment from "../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className="hero min-h-screen bg-base-100 *bg-[url('/src/assets/images/bg-2.jpg')]">
      <div className="hero-content flex-col lg:flex-row">
        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="pl-10">
          <h1 className="text-5xl font-bold text-white*">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6 text-white*">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et
            qui, dolores aperiam consequatur inventore illo eos culpa quaerat
            expedita iste voluptate soluta dicta suscipit distinctio
            consequuntur corporis atque ducimus aspernatur minus error vel nihil
            in minima. A vero, nesciunt iste labore laboriosam dolorum impedit
            libero consectetur ut excepturi mollitia.
          </p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
