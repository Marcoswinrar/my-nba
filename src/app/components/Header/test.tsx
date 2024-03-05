import { render } from "@testing-library/react"
import Header from ".";

describe("<Header /> component tests", () => {

  it("Should render component without problems", () => {
    const { getByText } = render(<Header title="My Header Title"/>);
    expect(getByText("My Header Title →")).toBeInTheDocument();

  }); 
});