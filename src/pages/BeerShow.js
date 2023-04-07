import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import BeerEdit from "./BeerEdit";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  NavLink,
} from "reactstrap";

const BeerShow = ({ beers, deleteBeer }) => {
  const navigate = useNavigate()
  const { id } = useParams();
  let selectedBeer = beers.find((beer) => beer.id === +id);

  const handleDelete = () => {
    deleteBeer(selectedBeer.id)
    navigate('/beerindex')
  }

  return (
    <>
      {selectedBeer && (
        <Card
          style={{
            width: "18rem",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">{selectedBeer.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {selectedBeer.brewery}
            </CardSubtitle>
            <CardText>{`${selectedBeer.description}`}</CardText>
            <Button>
              <NavLink href="/BeerIndex">Back To Home</NavLink>
            </Button>
            <div>
              <Button>
              <NavLink href={`/beeredit/${selectedBeer.id}`}>Edit Beer Info</NavLink>
              </Button>
              <NavLink to="/beerindex" onClick={handleDelete}>
              <Button>
                Delete Beer
              </Button>
              </NavLink>
            </div>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default BeerShow;
