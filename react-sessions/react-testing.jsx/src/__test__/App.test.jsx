import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";

test("Check for h1 element", () => {
  render(<App />);
  let element = screen.getAllByRole("heading");
  expect(element[0]).toBeInTheDocument();
  expect(element[0].nodeName).toBe("H1");
  expect(element[0].innerHTML).toContain("Hello, React");
  expect(element[0]).toBeVisible();
  expect(element.length).toBe(1);
});
