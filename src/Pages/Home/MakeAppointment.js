import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white">Make an Appointment Today</h2>
        <p className="text-white pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          facilis. Modi possimus amet ipsa ipsam autem fugit veritatis nulla
          eveniet optio blanditiis ut cum impedit architecto, ad reiciendis
          molestias quas veniam! Dolore tenetur tempora repellendus, possimus
          maxime asperiores impedit illo.
        </p>
        <PrimaryButton></PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
