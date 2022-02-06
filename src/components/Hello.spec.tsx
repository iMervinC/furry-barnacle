import Hello from "./Hello";
import { render, screen } from "@testing-library/react";

it("should display Hello", () => {
  render(<Hello />);
  const helloElem = screen.getByText("Hello");
  expect(helloElem).toBeInTheDocument();
});
