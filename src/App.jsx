import "./App.css";
import "./Components/Appbar.jsx";
import Appbar from "./Components/Appbar.jsx";
import Card from "./UI/Card.jsx";
import Card2 from "./UI/Card2.jsx";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Card />
      <Card2 />
    </div>
  );
}

export default App;
