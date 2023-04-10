import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

const BeerUpdate = ({ updateBeer, beers }) => {
  const { id } = useParams();
  let selectedBeer = beers.find((beer) => beer.id === +id);
  const navigate = useNavigate();
  const [updatedBeer, SetUpdatedBeer] = useState({
    id: id,
    name: selectedBeer.name,
    brewery: selectedBeer.brewery,
    abv: selectedBeer.abv,
    ibu: selectedBeer.ibu,
    variety: selectedBeer.variety,
    description: selectedBeer.description,
    img: selectedBeer.img,
  });

  const handleChange = (e) => {
    SetUpdatedBeer({ ...updatedBeer, [e.target.name]: e.target.value });
    console.log(updatedBeer);
  };

  const handleSubmit = () => {
    updateBeer(updatedBeer, updatedBeer.id);
    navigate("/beerindex");
    // console.log(updatedBeer);
  };

  return (
    <>
      <Form className="form">
        <FormGroup floating>
          <Input
            name="name"
            placeholder="Name of Beer"
            onChange={handleChange}
            value={updatedBeer.name}
          />
          <Label for="beerName">Name of Beer</Label>
        </FormGroup>

        <FormGroup floating>
          <Input
            name="brewery"
            placeholder="Name of Brewery"
            onChange={handleChange}
            value={updatedBeer.brewery}
          />
          <Label for="breweryName">Name of Brewery</Label>
        </FormGroup>

        <FormGroup floating>
          <Input
            name="abv"
            placeholder="ABV"
            onChange={handleChange}
            value={updatedBeer.abv}
          />
          <Label for="abv">ABV</Label>
        </FormGroup>

        <FormGroup floating>
          <Input
            name="ibu"
            placeholder="IBU"
            onChange={handleChange}
            value={updatedBeer.ibu}
          />
          <Label for="ibu">IBU</Label>
        </FormGroup>

        <FormGroup floating>
          <Input
            name="variety"
            placeholder="variety"
            onChange={handleChange}
            value={updatedBeer.variety}
          />
          <Label for="variety">Variety</Label>
        </FormGroup>

        <FormGroup floating>
          <Input
            name="description"
            placeholder="description"
            onChange={handleChange}
            value={updatedBeer.description}
          />
          <Label for="description">Description of Current Beer</Label>
        </FormGroup>

        <FormGroup floating>
          <Input
            name="img"
            placeholder="image"
            onChange={handleChange}
            value={updatedBeer.img}
          />
          <Label for="image">URL Image of Beer</Label>
        </FormGroup>
        <FormGroup>
          <Button onClick={handleSubmit} name="submit">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default BeerUpdate;
