import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Form } from "../Form";

describe("Form tests", () => {
    it("matches snaphot", () => {
        const result = render(<Form onSubmit={() => {}} />);
    
        expect(result).toMatchSnapshot();
      }); 

  it("calls onSubmit when btn clicked", () => {
    const mockSubmit = jest.fn();
    render(<Form onSubmit={mockSubmit} />);

    const btn = screen.getByRole("button");
    fireEvent(
      btn,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith("");
  });
});