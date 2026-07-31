import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header auth state", () => {
  it("shows the profile image once the user is signed in", () => {
    render(
      <MemoryRouter>
        <Header isLoggedIn={true} userName="Amina" />
      </MemoryRouter>,
    );

    expect(screen.getByAltText("User profile")).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /sign in/i }),
    ).not.toBeInTheDocument();
  });
});
