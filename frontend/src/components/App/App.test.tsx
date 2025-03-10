import React from "react";
import { screen } from "@testing-library/react";
import { customRenderWithRouter } from "../../testUtils/wrappers";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Code Snippets'", () => {
      const expectedTitle = "Snippets";

      customRenderWithRouter(<App />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
