import {render, screen} from '@testing-library/react'
import BeerNew from './BeerNew'
import { BrowserRouter } from 'react-router-dom'


describe("<BeerNew />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <BeerNew />
        </BrowserRouter>
      )
    })
    it("renders the BeerNew page for the user", () => {
      const inputTitle = screen.getByText("Add A New Beer")
      expect(inputTitle).toBeInTheDocument()
    })
  
    it("has a form with entries for beer data", () => {
      const formName = screen.getByText(/Name of Beer/i)
      expect(formName.getAttribute("for")).toEqual("beerName")
  
      const formBrewery = screen.getByText(/Name of Brewery/i)
      expect(formBrewery.getAttribute("for")).toEqual("breweryName")
  
      const formAbv = screen.getByText(/abv/i)
      expect(formAbv.getAttribute("for")).toEqual("abv")

      const formIbu = screen.getByText(/ibu/i)
      expect(formIbu.getAttribute("for")).toEqual("ibu")

      const formVariety = screen.getByText(/variety/i)
      expect(formVariety.getAttribute("for")).toEqual("variety")
      
      const formDescription = screen.getByText(/description/i)
      expect(formDescription.getAttribute("for")).toEqual("description")

      const formImage = screen.getByText(/image/i)
      expect(formImage.getAttribute("for")).toEqual("image")
    })
  })