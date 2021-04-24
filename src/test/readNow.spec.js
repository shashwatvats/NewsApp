import ReadNow from "../Components/readNow/ReadNow";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { unmountComponentAtNode, render as renderer } from "react-dom";
// please add your test cases here

describe("ReadNow component Test", () => {
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
  test("should have 2 div", () => {
    renderer(<ReadNow />, element);
    const countDiv = element.getElementsByTagName("div").length;
    expect(countDiv).toBe(2);
  });
  test("should have a div with class container", () => {
    render(<ReadNow />);
    expect(screen.getByTestId("divcontainer")).toHaveClass("container");
  });
  test("should have a div with class row", () => {
    render(<ReadNow />);
    expect(screen.getByTestId("divcontainerrow")).toHaveClass("row");
  });
});

export default ReadNow;
