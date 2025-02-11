import { render, screen, waitFor } from "@testing-library/react";
import ToastDemo from "../../src/components/ToastDemo";
import userEvent from "@testing-library/user-event";
import { Toaster } from "react-hot-toast";

describe("Toast", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });
  it("should render a toast", async () => {
    render(
      <>
        <ToastDemo />
        <Toaster />
      </>
    );
    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);

    const toast = await screen.findByText(/success/i);
    expect(toast).toBeInTheDocument();
  });
});
