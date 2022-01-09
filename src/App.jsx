import "./App.css";
import "./Components/Appbar.jsx";
import Appbar from "./Components/Appbar.jsx";
import Card from "./UI/Card.jsx";

const cardData = [
  {
    img: "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/10/GettyImages-947995974.jpg",
    title: "Hair Stylist",
    content: "The bitch that does your hair and then charges you a fortune.",
  },
  {
    img: "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/10/GettyImages-947995974.jpg",
    title: "Hair Stylist",
    content: "The bitch that does your hair and then charges you a fortune.",
  },
  {
    img: "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/10/GettyImages-947995974.jpg",
    title: "Hair Stylist",
    content: "The bitch that does your hair and then charges you a fortune.",
  },
  {
    img: "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/10/GettyImages-947995974.jpg",
    title: "Hair Stylist",
    content: "The bitch that does your hair and then charges you a fortune.",
  },
  {
    img: "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/10/GettyImages-947995974.jpg",
    title: "Hair Stylist",
    content: "The bitch that does your hair and then charges you a fortune.",
  },
  {
    img: "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/10/GettyImages-947995974.jpg",
    title: "Hair Stylist",
    content: "The bitch that does your hair and then charges you a fortune.",
  },
];

function App() {
  return (
    <div className="App">
      <Appbar />
      <div className="cardContainer wrapper">
        {cardData.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
