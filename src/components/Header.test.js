import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"

describe("<Header />", () => {
  it("renders the header", () => {
    render(
      <BrowserRouter >
        <Header />
      </BrowserRouter>
    );
    const greeting = screen.getByText("Welcome To Beer Tinder")
    expect(greeting).toBeInTheDocument()
  });
});
