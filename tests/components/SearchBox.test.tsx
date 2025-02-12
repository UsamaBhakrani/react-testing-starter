import { render, screen } from "@testing-library/react";
import SearchBox from "../../src/components/SearchBox";
import userEvent from "@testing-library/user-event";

describe("SearchBox", () => {
  const onChange = vi.fn();
  const renderComponent = () => {
    render(<SearchBox onChange={onChange} />);
    return {
      input: screen.getByPlaceholderText(/search/i),
      onChange,
      user: userEvent.setup(),
    };
  };

  it("should render an input field for searching", () => {
    const { input } = renderComponent();

    expect(input).toBeInTheDocument();
  });

  it("should call the onChange callback when enter is pressed", async () => {
    const { user, input, onChange } = renderComponent();

    const searchTerm = "SearchTerm";
    await user.type(input, searchTerm + "{enter}");
    expect(onChange).toHaveBeenCalledWith(searchTerm);
  });

  it("should not call the onChange callback when input is empty", async () => {
    const { user, input, onChange } = renderComponent();

    await user.type(input, "{enter}");

    expect(onChange).toHaveBeenCalled();
  });
});
