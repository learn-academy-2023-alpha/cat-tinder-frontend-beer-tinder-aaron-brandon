import React, { useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const BeerShow = ({ beers, deleteBeer }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  let selectedBeer = beers.find((beer) => beer.id === +id);

  console.log(selectedBeer);

  // const handleDelete = (id) => {
  //   deleteBeer(id);
  //   // navigate("/beerindex");
  // };

  return (
    <>
      {selectedBeer && (
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img
            className="beer-image"
            alt="Sample"
            src={`${selectedBeer?.img}`}
          />
          <CardBody className="card-body">
            <CardTitle tag="h5">{selectedBeer.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {selectedBeer.brewery}
            </CardSubtitle>
            <CardText>{`${selectedBeer.description}`}</CardText>
            <Button>
              <NavLink to={"/beerindex"}>Back To Home</NavLink>
            </Button>
            <div>
              <Button>
                <NavLink to={`/beeredit/${selectedBeer.id}`}>
                  Edit Beer Info
                </NavLink>
              </Button>
              <Button onClick={() => deleteBeer(selectedBeer.id)}>
                <NavLink to={"/beerindex"}>Delete Beer</NavLink>
              </Button>
            </div>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default BeerShow;
