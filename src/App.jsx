import "./App.css";
import "./Components/Appbar.jsx";
import Appbar from "./Components/Appbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Specials from "./pages/Specials";
import Services from "./pages/Services";
import BookOnline from "./pages/BookOnline";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignUp";
import SignUp from "./pages/SignIn";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Appbar />
      <div className="main-container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book-online" element={<BookOnline />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
