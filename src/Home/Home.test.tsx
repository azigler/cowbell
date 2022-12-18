import { render, screen } from "@testing-library/react"
import { Home } from "../Home/Home"

test("renders this is home", () => {
  render(<Home />)
  const linkElement = screen.getByText(/This is Home./i)
  expect(linkElement).toBeInTheDocument()
})
