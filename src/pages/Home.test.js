import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "./Home"
import BeerLogo from "../assets/BeerLogo.png"

describe("<Home />", () => {
  it("renders the home page", () => {
    render(
      <BrowserRouter >
        <Home />
      </BrowserRouter>
    );
    const backgroundImage = screen.getByRole("img")
    expect(backgroundImage).toHaveAttribute("src", BeerLogo)
  });
});