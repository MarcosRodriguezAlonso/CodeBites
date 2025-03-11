import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Snippets'", () => {
      const expectedTitle = "Snippets";

      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
