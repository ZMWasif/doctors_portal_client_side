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
import Review from "./Pages/Review/Review";
import Testimonial from "./Pages/Home/Testimonial";
import SignUp from "./Pages/Login/SignUp";
import RequiredAuth from "./Pages/Login/RequiredAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route
          path="appointment"
          element={
            <RequiredAuth>
              <Appointment />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path="reviews" element={<Testimonial />}></Route>
        <Route path="contact us" element={<Contact_Us />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
