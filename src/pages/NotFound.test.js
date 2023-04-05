import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "./NotFound"

describe("<NotFound />", () => {
  it("renders the not found page", () => {
    render(
      <BrowserRouter >
        <NotFound />
      </BrowserRouter>
    );
    const notFoundText = screen.getByText("Oops, Beer is Empty.")
    expect(notFoundText).toBeInTheDocument()
  });
});