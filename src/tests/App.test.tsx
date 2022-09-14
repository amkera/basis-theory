import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../App"

test("should show search page when search page is clicked", () => {
  render(<App />)
  userEvent.click(screen.getByText(/Search/))
  expect(screen.getByText(/Search Page/)).toBeInTheDocument()
})

test("should show checkout page when checkout page is clicked", () => {
  render(<App />)
  userEvent.click(screen.getByText(/Checkout/))
  expect(screen.getByText(/Payment/)).toBeInTheDocument()
})
