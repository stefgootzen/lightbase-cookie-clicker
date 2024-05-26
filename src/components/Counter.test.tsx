import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter", () => {
  it("renders with the initial count", () => {
    render(<Counter initialCount={0} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("increments count by clicking the cookie", () => {
    render(<Counter initialCount={0} />);
    const cookie = screen.getByAltText("Add cookie");
    fireEvent.click(cookie);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("toggles automation", async () => {
    jest.useFakeTimers();
    render(<Counter initialCount={0} />);
    const automateButton = screen.getByText("Turn automate on");

    // Start automation
    fireEvent.click(automateButton);

    // Button text updates accordingly
    expect(screen.getByText("Turn automate off")).toBeInTheDocument();

    // Cookie incremented every second
    act(() => jest.advanceTimersByTime(1000));
    expect(screen.getByText("1")).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(1000));
    expect(screen.getByText("2")).toBeInTheDocument();

    // Stop automation
    fireEvent.click(automateButton);

    // Button text updates accordingly
    expect(screen.getByText("Turn automate on")).toBeInTheDocument();

    // Cookie does not increment anymore
    act(() => jest.advanceTimersByTime(1000));
    expect(screen.getByText("2")).toBeInTheDocument();

    jest.useRealTimers();
  });
  it("resets the count", () => {
    render(<Counter initialCount={5} />);
    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
