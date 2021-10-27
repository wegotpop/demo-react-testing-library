import * as React from "react";
import { render, screen } from "@testing-library/react";
import { MyButton } from "../MyButton";

jest.mock("../popsss", () => {
  return { getJSON: (url: string) => ({ other: "value" }) };
});

describe("MuButton tests", () => {
  test("renders learn react link", () => {
    // Create a mock function, which we will then use to check things are being called
    const mockOnClickHandler = jest.fn();

    const result = render(<MyButton onClick={mockOnClickHandler} />);

    // find the element, based on its text content
    // const button = screen.getByText(/Click Me!/i);

    // Find the elelement based on a data-testid attribute
    const button = screen.getByTestId("button-to-be-clicked");

    expect(button).toBeInTheDocument();

    // Click the button
    button.click();
    button.click();

    // Check the mock function was called exactly once
    expect(mockOnClickHandler).toBeCalledTimes(2);
  });
});
