import React from "react";
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

const BeerIndex = ({ beers }) => {
  let slides = beers.map((beers, index) => {
    return (
      <Card
        key={index}
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{beers.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {beers.brewery}
          </CardSubtitle>
          <CardText>{`This ${beers.variety} has a ${beers.primary_flavor} flavor, with hints of ${beers.secondary_flavor}`}</CardText>
          <Button>
            <NavLink to={`/beershow/${beers.id}`}>More Info</NavLink>
          </Button>
        </CardBody>
      </Card>
    );
  });
  const callback = function (index) {
    console.log("callback", index);
  };

  return (
    <>
      <div id="carousel-container">
        <Carousel
          slides={slides}
          autoplay={false}
          interval={1000}
          onSlideChange={callback}
        />
      </div>
    </>
  );
};
export default BeerIndex;
