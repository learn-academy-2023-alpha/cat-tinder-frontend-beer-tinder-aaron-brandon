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

const BeerIndex = ({ beers }) => {
  return (
    <>
      <p>BEERS SHOULD DISPLAY BELOW</p>
      <div>
        {beers.map((beers, index) => {
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
        })}
      </div>
      <p>BEERS SHOULD DISPLAY ABOVE</p>
    </>
  );
};

export default BeerIndex;
