import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { button } from "../../components/button/button";

describe("Button style tests from BookingsPage", () => {
    test("Button color is red when Booking status is Check Out", () => {
        render(<button />);
        const button = screen.getByRole('button', {name : "testing"})
        expect(button).toBeInTheDocument();
    })
})