import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm/>);
    const header = screen.queryByText("Checkout Form");
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render (<CheckoutForm/>);

    const nameInput = screen.getByLabelText(/first name/i);
    userEvent.type(nameInput, "Karla");

    const lastInput = screen.getByLabelText(/last name:/i);
    userEvent.type(lastInput, "Nieves");

    const addressInput = screen.getByLabelText(/address:/i);
    userEvent.type(addressInput, "111 N. Lambda");

    const cityInput = screen.getByLabelText(/city:/i);
    userEvent.type(cityInput, "Los Angeles");

    const stateInput = screen.getByLabelText(/state:/i);
    userEvent.type(stateInput, "California");

    const zipInput = screen.getByLabelText(/zip:/i);
    userEvent.type(zipInput, "11111");

    const button = screen.getByRole("button");
    userEvent.click(button);

});
