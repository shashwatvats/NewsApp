import DisplayCard from "../Components/displaycard/DisplayCard";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { unmountComponentAtNode, render as renderer } from "react-dom";
// please add your test cases here
describe("DisplayCard Component Test", () => {
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
  test("should have more than 3 div", () => {
    renderer(<DisplayCard />, element);
    const countDiv = element.getElementsByTagName("div").length;
    expect(countDiv).toBeGreaterThanOrEqual(3);
  });
  test("should have a div with class name card", () => {
    render(<DisplayCard />);
    expect(screen.getByTestId("card")).toHaveClass("card");
  });
  test("should have 1 img tag", () => {
    renderer(<DisplayCard />, element);
    const countImg = element.getElementsByTagName("img").length;
    expect(countImg).toBe(1);
  });
  test("should have 1 h5 tag", () => {
    renderer(<DisplayCard />, element);
    const countH5 = element.getElementsByTagName("h5").length;
    expect(countH5).toBe(1);
  });
  test("should have a tag with alt text image not found", () => {
    render(<DisplayCard />);
    expect(screen.getByAltText("Image Not Found!")).toBeInTheDocument();
  });
  test("should have a class with name stylea and color property", () => {
    render(<DisplayCard />);
    expect(screen.getByTestId("img")).toHaveStyle("max-height:150px");
  });
});

export default DisplayCard;
