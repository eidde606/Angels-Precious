import React from "react";
import "./Home.css";

import Card from "../UI/Card";

const Home = () => {
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
  return (
    <div className="home-container">
      <h1>Home</h1>
      <div className="cardContainer wrapper">
        {cardData.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </div>
  );
};

export default Home;
