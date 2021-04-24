import Header from "../Components/header/Header";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { unmountComponentAtNode, render as renderer } from "react-dom";
// please add your test cases here

describe("Header Component test", () => {
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
  test("Should have heading as News App", () => {
    render(<Header />);
    expect(screen.getByText("News App")).toBeInTheDocument();
  });
  test("Should have navbar with className navbar", () => {
    render(<Header />);
    expect(screen.getByTestId("navbar")).toHaveClass("navbar");
  });
  test("Should have Only one Nav element", () => {
    renderer(<Header />, element);
    const countNav = element.getElementsByTagName("nav").length;
    expect(countNav).toBe(1);
  });
  test("should have a h2 tag", () => {
    renderer(<Header />, element);
    const countH2 = element.getElementsByTagName("h2").length;
    expect(countH2).toBe(1);
  });
});

export default Header;
