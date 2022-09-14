import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../App"

describe("basic App tests", () => {
  it("renders without crashing", () => {
    render(<App />)
  })

  it("should show search page when search page is clicked", () => {
    render(<App />)
    userEvent.click(screen.getByText(/Search/))
    expect(screen.getByText(/Search Page/)).toBeInTheDocument()
  })

  it("should show checkout page when checkout page is clicked", () => {
    render(<App />)
    userEvent.click(screen.getByText(/Checkout/))
    expect(screen.getByText(/Payment/)).toBeInTheDocument()
  })
})
