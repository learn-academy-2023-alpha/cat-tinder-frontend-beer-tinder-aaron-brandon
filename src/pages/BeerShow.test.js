import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BeerShow from "./BeerShow";
import beers from "../mockBeers";

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/beershow/1"]}>
      <Routes>
        <Route path="/beershow/:id" element={<BeerShow beers={beers} />} />
      </Routes>
    </MemoryRouter>
  );
};
describe("<BeerShow />", () => {
  it("renders a single beer with details", () => {
    renderShow();
    // screen.logTestingPlaygroundURL()
    const brewery = screen.getByText(`${beers[0].brewery}`);
    expect(brewery).toBeInTheDocument;
  });
});
