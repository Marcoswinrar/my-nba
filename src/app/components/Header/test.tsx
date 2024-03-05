import { render, screen } from "@testing-library/react"
import Header from '@/app/components/Header'

describe("<Header /> component tests", () => {

  it("Should render component without problems", () => {
    render(<Header title="My Header Title"/>);
    expect(screen.getByText("My Header Title →")).toBeInTheDocument();

  }); 
});