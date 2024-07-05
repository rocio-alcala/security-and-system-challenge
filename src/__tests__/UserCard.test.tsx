import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserCard from "@/components/UserCard";

it("should render name passed as a prop", () => {
  render(<UserCard img="http://test.com" name="Jon Doe" />);
  const name = screen.getByText("Jon Doe");
  expect(name).toBeInTheDocument;
});
