import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BeerIndex from "./BeerIndex";
import beers from "../mockBeers";

describe("<BeerIndex />", () => {
  it("renders a list of beers", () => {
    render(
      <BrowserRouter>
        <BeerIndex beers={beers} />
      </BrowserRouter>
    );

    beers.forEach((beer) => {
      const beerName = screen.getByText(beer.name);
      expect(beerName).toBeInTheDocument();
    });
  });
});
