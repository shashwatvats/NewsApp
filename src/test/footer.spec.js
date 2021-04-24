import Footer from "../Components/footer/Footer";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { unmountComponentAtNode, render as renderer } from "react-dom";
// please add your test cases here

describe("Footer component Test", () => {
  let element = "";
  beforeEach(() => {
    element = document.createElement("div");
    document.body.appendChild(element);
  });
  afterEach(() => {
    unmountComponentAtNode(element);
    element.remove();
    element = null;
  });
  test("should have 1 div", () => {
    renderer(<Footer />, element);
    const countDiv = element.getElementsByTagName("div").length;
    expect(countDiv).toBe(1);
  });
  test("should have a div with class name footer", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toHaveClass("footer");
  });
  test("should have a text News App", () => {
    render(<Footer />);
    expect(screen.getByText("News App")).toBeInTheDocument();
  });
  test("should have 1 b tag", () => {
    renderer(<Footer />, element);
    const countB = element.getElementsByTagName("b").length;
    expect(countB).toBe(1);
  });
  test("should have 1 i tag", () => {
    renderer(<Footer />, element);
    const countI = element.getElementsByTagName("i").length;
    expect(countI).toBe(1);
  });
});

export default Footer;
