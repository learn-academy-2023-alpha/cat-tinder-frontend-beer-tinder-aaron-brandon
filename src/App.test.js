import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("<App />", () => {
  it("renders the header", () => {
    // arrange function
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ); // Act
    const greeting = screen.getByText("Welcome To Beer Tinder");
    // Assert
    expect(greeting).toBeInTheDocument();
  });

  it("renders the footer", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ); // Act
    const footerText = screen.getByText(
      "Site Created By Aaron Criner & Brandon Ray"
    );
    // Assert
    expect(footerText).toBeInTheDocument();
  });
  it("renders the home page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ); // Act
    const footerText = screen.getByText(
      "Site Created By Aaron Criner & Brandon Ray"
    );
    // Assert
    expect(footerText).toBeInTheDocument();
  });
});
