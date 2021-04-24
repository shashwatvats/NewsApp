import Register from "../Components/register/Register";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { unmountComponentAtNode, render as renderer } from "react-dom";
// please add your test cases here

describe("Register component Test", () => {
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
  test("should have 3 div", () => {
    renderer(<Register />, element);
    const countDiv = element.getElementsByTagName("div").length;
    expect(countDiv).toBe(3);
  });
  test("should have a label with class form-label", () => {
    render(<Register />);
    expect(screen.getByTestId("label")).toHaveClass("form-label");
  });
  test("should have a text Register", () => {
    render(<Register />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });
  test("should have 2 input tag", () => {
    renderer(<Register />, element);
    const countInput = element.getElementsByTagName("input").length;
    expect(countInput).toBe(2);
  });
  test("should have 1 button tag", () => {
    renderer(<Register />, element);
    const countButton = element.getElementsByTagName("button").length;
    expect(countButton).toBe(1);
  });
});

export default Register;
