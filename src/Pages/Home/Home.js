import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services/Services";
import Treatment from "./Treatment";
import MakeAppointment from "./MakeAppointment";
import Testimonial from "./Testimonial";
import Contact_Us from "../Contact_Us/Contact_Us";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Treatment></Treatment>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Contact_Us></Contact_Us>
    </div>
  );
};

export default Home;
