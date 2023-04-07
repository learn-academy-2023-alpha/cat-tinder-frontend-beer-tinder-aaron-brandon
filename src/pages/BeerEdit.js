import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Label,
  Button,
  Input,
} from 'reactstrap'


const BeerUpdate = ({ updateBeer, beers }) => {
  const { id } = useParams();
  let selectedBeer = beers.find((beer) => beer.id === +id);
  const navigate = useNavigate()
  const [updatedBeer, SetUpdatedBeer] = useState({id:id , name: "", brewery: "", abv: "", ibu: "", variety: "", description: "", img: ""})

  const handleChange = (e) => {
    SetUpdatedBeer({...updatedBeer, [e.target.name]: e.target.value})
    console.log(updatedBeer);
  }
  
  const handleSubmit = () => {
    updateBeer(updatedBeer, updatedBeer.id)
    navigate('/beerindex')
    // console.log(updatedBeer);
  }

  
  return (
    <>
    <Form className='form'>
      <FormGroup floating>
        <Input 
          name="name"
          placeholder="Name of Beer"
          onChange = {handleChange}
          />
      <Label for="beerName">
        Name of Beer
      </Label> 
    </FormGroup>

    <FormGroup floating>
        <Input
          name="brewery"
          placeholder="Name of Brewery"
          onChange = {handleChange}
          />
      <Label for="breweryName">
        Name of Brewery 
      </Label>
    </FormGroup>

    <FormGroup floating>
      <Input
        name="abv"
        placeholder="ABV"
        onChange = {handleChange}
        />
      <Label
        for="abv"
        >
        ABV
      </Label>
    </FormGroup>

    <FormGroup floating>
      <Input
        name="ibu"
        placeholder="IBU"
        onChange = {handleChange}
        />
      <Label
        for="ibu"
        >
        IBU
      </Label>
    </FormGroup>

    <FormGroup floating>
      <Input
        name="variety"
        placeholder="variety"
        onChange = {handleChange}
        />
      <Label
        for="variety"
        >
        Variety
      </Label>
    </FormGroup>

    <FormGroup floating>
      <Input
        name="description"
        placeholder="description"
        onChange = {handleChange}
        />
      <Label
        for="description"
        >
        Description of Current Beer
      </Label>
    </FormGroup>

    <FormGroup floating>
      <Input
        name="URL Image"
        placeholder="image"
        onChange = {handleChange}
        />
      <Label
        for="image"
        >
        URL Image of Beer
      </Label>
    </FormGroup>
    <FormGroup
    >
        <Button onClick = {handleSubmit} name = "submit" >
          Submit
        </Button>
    </FormGroup>
  </Form>
      </>
  )
}

export default BeerUpdate