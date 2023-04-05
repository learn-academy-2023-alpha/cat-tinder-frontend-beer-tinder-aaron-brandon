import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("renders the footer", () => {
    const div = document.createElement("div");
    render(
        <BrowserRouter >
          <Footer />
        </BrowserRouter>, 
        div
      );
      const footerText = screen.getByText("Site Created By Aaron Criner & Brandon Ray")
      expect(footerText).toBeInTheDocument()
    });
  });
  