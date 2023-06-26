import React from "react";
import ServicesCard from "./ServicesCard";
import cavity from "../../../assets/images/cavity.png";
import fluoride from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary  text-xl font-bold uppercase">
          Our Services
        </h3>
        <h1 className="text-4xl">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <ServicesCard
          cardTitle="Cavity Training"
          bgClass="bg-white"
          img={cavity}
        ></ServicesCard>
        <ServicesCard
          cardTitle="Fluoride Treatment"
          bgClass="bg-white"
          img={fluoride}
        ></ServicesCard>
        <ServicesCard
          cardTitle="Teeth Whitening"
          bgClass="bg-white"
          img={whitening}
        ></ServicesCard>
      </div>
    </div>
  );
};

export default Services;
