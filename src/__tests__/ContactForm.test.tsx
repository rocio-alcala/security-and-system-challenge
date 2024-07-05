import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "@/components/ContactForm";

it("should render email,name and message inputs and submit button", () => {
  render(<ContactForm />);
 
  // select input
  const emailElement = screen.getByLabelText("Email");
  // check for render of input
  expect(emailElement).toBeInTheDocument;

  const nameElement = screen.getByLabelText("Nombre");
  expect(nameElement).toBeInTheDocument;

  const messageElement = screen.getByLabelText("Mensaje");
  expect(messageElement).toBeInTheDocument;

  const submitButtonElement = screen.getByRole("button", { name: /ENVIAR/i });
  expect(submitButtonElement).toBeInTheDocument;
});

it("should show required error message when inputs are empty on submit", async () => {
  render(<ContactForm />);

  // fire submit with out any input
  const submitButton = screen.getByRole("button", { name: /ENVIAR/i });
  fireEvent.click(submitButton);

  // check for requiered error message to show
  await waitFor(() => {
    expect(screen.getByText(/Nombre es requerido/i)).toBeInTheDocument();
    expect(screen.getByText(/Email es requerido/i)).toBeInTheDocument();
    expect(screen.getByText(/Mensaje es requerido/i)).toBeInTheDocument();
  });
});

it("should show validation message for valid email format", async () => {
  render(<ContactForm />);

  // input invalid email
  const emailInput = screen.getByLabelText(/Email/i);
  fireEvent.change(emailInput, { target: { value: "test" } });

  // fire submit
  const submitButton = screen.getByRole("button", { name: /ENVIAR/i });
  fireEvent.click(submitButton);

  // check for error message to show
  await waitFor(() => {
    expect(
      screen.queryByText(/Tiene que ser un email valido/i),
    ).toBeInTheDocument();
  });
});

it("should not show validation message for valid email format", async () => {
  render(<ContactForm />);

  // input valid email
  const emailInput = screen.getByLabelText(/Email/i);
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });

  // fire submit
  const submitButton = screen.getByRole("button", { name: /ENVIAR/i });
  fireEvent.click(submitButton);

  // check for error message NOT to show
  await waitFor(() => {
    expect(
      screen.queryByText(/Tiene que ser un email valido/i),
    ).not.toBeInTheDocument();
  });
});
