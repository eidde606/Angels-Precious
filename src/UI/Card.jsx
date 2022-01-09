import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./Card.css";

export default function MultiActionAreaCard() {
  const clickHandler = () => {
    console.log("Fuck You!!!");
  };
  return (
    <div className="cards">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/10/GettyImages-947995974.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hair Stylist
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The bitch that does your hair and then charges you a fortune.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={clickHandler}>
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
