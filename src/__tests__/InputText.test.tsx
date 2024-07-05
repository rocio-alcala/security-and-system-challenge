import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputText from "@/components/InputText";

it("should render input text given any random id", () => {
  render(<InputText id="test" />);
  const textElement = screen.getByRole("textbox");
  expect(textElement).toBeInTheDocument;
});
