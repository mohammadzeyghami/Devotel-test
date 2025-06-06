import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavigationPrimary from "./NavigationPrimary";

describe("NavigationPrimary", () => {
  it("renders Home and Form links", () => {
    render(
      <MemoryRouter>
        <NavigationPrimary />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /form/i })).toBeInTheDocument();
  });

  it("has correct href attributes", () => {
    render(
      <MemoryRouter>
        <NavigationPrimary />
      </MemoryRouter>
    );

    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Form").closest("a")).toHaveAttribute(
      "href",
      "/form"
    );
  });
});
