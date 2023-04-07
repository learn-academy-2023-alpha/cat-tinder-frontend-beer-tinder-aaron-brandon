import React from "react";
import { useParams } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  NavLink,
} from "reactstrap";
import logo from "../assets/beerimage/1.png";

const BeerShow = ({ beers }) => {
  const { id } = useParams();
  let selectedBeer = beers.find((beer) => beer.id === +id);
  return (
    <>
      {selectedBeer && (
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt={selectedBeer.name} src={logo} />
          <CardBody>
            <CardTitle tag="h5">{selectedBeer.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {selectedBeer.brewery}
            </CardSubtitle>
            <CardText>{`${selectedBeer.description}`}</CardText>
            <Button>
              <NavLink href="/BeerIndex">Back To Home</NavLink>
            </Button>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default BeerShow;
