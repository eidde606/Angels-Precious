import "./App.css";
import "./Components/Appbar.jsx";
import Appbar from "./Components/Appbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Specials from "./pages/Specials";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/specials" element={<Specials />} />
      </Routes>
    </div>
  );
}

export default App;
