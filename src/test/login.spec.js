// import Login from "../Components/login/Login";
// import { render, screen } from "@testing-library/react";
// import React from "react";
// import "@testing-library/jest-dom";
// import { unmountComponentAtNode, render as renderer } from "react-dom";
// // please add your test cases here

// describe("Login component Test", () => {
//     let element = "";
//     beforeEach(() => {
//       element = document.createElement("div");
//       document.body.appendChild(element);
//     });
//     afterEach(() => {
//       unmountComponentAtNode(element);
//       element.remove();
//       element = null;
//     });
//     test("should have 4 div", () => {
//       renderer(<Login />, element);
//       const countDiv = element.getElementsByTagName("div").length;
//       expect(countDiv).toBe(4);
//     });
//   test("should have a div with class name col-md-5", () => {
//     render(<Login />);
//     expect(screen.getByTestId("logindiv")).toHaveClass("col-md-5");
//   });
//     test("should have a text Login", () => {
//       render(<Login />);
//       expect(screen.getByText("Login")).toBeInTheDocument();
//     });
//     test("should have 1 h2 tag", () => {
//       renderer(<Login />, element);
//       const counth2 = element.getElementsByTagName("h2").length;
//       expect(counth2).toBe(1);
//     });
//     test("should have 1 button tag", () => {
//       renderer(<Login />, element);
//       const countButton = element.getElementsByTagName("button").length;
//       expect(countButton).toBe(1);
//     });
// });

// export default Login;
