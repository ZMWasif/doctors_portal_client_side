import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Reviews from "./Pages/Reviews/Reviews";
import Contact_Us from "./Pages/Contact_Us/Contact_Us";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="appointment" element={<Appointment />}></Route>
        <Route path="reviews" element={<Reviews />}></Route>
        <Route path="contact us" element={<Contact_Us />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
