import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { Carousel } from "3d-react-carousal";

const BeerIndex = ({ beers, likeBeer }) => {
  // manage slides for carousel
  let slides = beers?.map((beer, index) => {
    return (
      <Card
        key={index}
        style={{
          width: "18rem",
        }}
      >
        <img className="beer-image" alt="Sample" src={`${beer?.img}`} />
        <CardBody>
          <CardTitle tag="h5">{beer?.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {beer?.brewery}
          </CardSubtitle>
          <CardText>{`${beer?.description}`}</CardText>
          <Button>
            <NavLink to={`/beershow/${beer?.id}`}>More Info</NavLink>
          </Button>
          {/* <Button onClick={() => likeBeer(beer, beer.id)}>LIKE</Button>
          <Button>
            <NavLink to={`/beershow/${beer?.id}`}>DISLIKE</NavLink>
          </Button> */}
        </CardBody>
      </Card>
    );
  });

  return (
    <>
      {slides?.length > 2 && (
        <div id="carousel-container">
          <Carousel
            slides={slides}
            autoplay={false}
            interval={2500}
            // onSlideChange={callback}
          />
        </div>
      )}
    </>
  );
};
export default BeerIndex;
