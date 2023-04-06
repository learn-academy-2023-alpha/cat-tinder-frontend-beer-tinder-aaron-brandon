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
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">{selectedBeer.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {selectedBeer.brewery}
            </CardSubtitle>
            <CardText>
              {`This ${selectedBeer.variety} has a ${selectedBeer.primary_flavor} flavor, with hints of ${selectedBeer.secondary_flavor}`}
            </CardText>
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
