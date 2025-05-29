import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Todo from "../Todo";

test("check for input", () => {
  render(<Todo />);
  let input = screen.getByTestId("todo-input");
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "task-1" } });
  let updatedInput = screen.getByTestId("todo-input");
  expect(updatedInput.value).toBe("task-1");
  let button = screen.getByRole("button");
  fireEvent.click(button);

  let updatedInput_1 = screen.getByTestId("todo-input");
  expect(updatedInput_1.value).toBe("");

  fireEvent.change(input, { target: { value: "task-2" } });
  fireEvent.click(button);

  let ul = screen.getByTestId("todo-list");
  expect(ul.childNodes.length).toBe(1);
});
