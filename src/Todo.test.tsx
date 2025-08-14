import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("добавляет задачу", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/New task/i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Buy milk" } });
  fireEvent.click(button);

  expect(screen.getByText("Buy milk")).toBeInTheDocument();
});
