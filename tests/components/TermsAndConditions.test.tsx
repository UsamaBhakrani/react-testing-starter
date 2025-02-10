import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("Terms And Conditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);
    return {
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button"),
      heading: screen.getByRole("heading"),
    };
  };
  it("should render with correct text and initial state", () => {
    const { heading, checkbox, button } = renderComponent();
    expect(heading).toHaveTextContent(/Terms & Conditions/i);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable the button when the checkbox is checked", async () => {
    const { checkbox, button } = renderComponent();

    const user = userEvent.setup();
    await user.click(checkbox);

    expect(button).toBeEnabled();
  });
});
