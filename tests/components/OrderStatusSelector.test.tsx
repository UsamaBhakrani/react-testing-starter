import { render, screen } from "@testing-library/react";
import OrderStatusSelector from "../../src/components/OrderStatusSelector";
import { Theme } from "@radix-ui/themes";
import userEvent from "@testing-library/user-event";

describe("Order Status Selector", () => {
  const renderComponent = () => {
    render(
      <Theme>
        <OrderStatusSelector onChange={vi.fn()} />
      </Theme>
    );
    return {
      button: screen.getByRole("combobox"),
      user: userEvent.setup(),
      getOptions: () => screen.findAllByRole("option"),
    };
  };
  it("should render new as the default value", () => {
    const { button } = renderComponent();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/new/i);
  });

  it("should render correct statuses", async () => {
    const { button, user, getOptions } = renderComponent();
    await user.click(button);

    const options = await getOptions();
    expect(options).toHaveLength(3);
    const labels = options.map((option) => option.textContent);
    expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  });
});
