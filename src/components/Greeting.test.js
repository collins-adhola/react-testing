import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Testing suite
describe("Greeting Component", () => {
  test("Testing my greeting comp", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing

    //addert

    const helloWorldElement = screen.getByText("Hello testing world", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' before Clicking button", () => {
    render(<Greeting />);
    const outPutElement = screen.getByText("Its good to see you", {
      exact: false,
    });
    expect(outPutElement).toBeInTheDocument();
  });

  test("renders 'changed", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("Will hide 'good to see you' when button clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
