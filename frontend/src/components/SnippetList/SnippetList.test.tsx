import React from "react";
import { screen } from "@testing-library/react";
import { customRenderWithRouter } from "../../testUtils/wrappers";
import SnippetList from "./SnippetList";
import snippetsApiMock from "../../mocks/snippetsApiMock";
import api from "../../api";

jest.mock("../../api");

describe("Given a SnippetList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of snippets", async () => {
      (api.get as jest.Mock).mockResolvedValue({ data: snippetsApiMock });

      customRenderWithRouter(<SnippetList />);

      const snippetTitles = await screen.findAllByRole("heading", { level: 2 });

      snippetsApiMock.forEach((snippet, index) => {
        expect(snippetTitles[index]).toHaveTextContent(snippet.title);
      });
    });

    test("Then it should show an error message if the API call fails", async () => {
      const errorMessage = "Error fetching snippets";
      (api.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

      customRenderWithRouter(<SnippetList />);

      const error = await screen.findByText(errorMessage);

      expect(error).toBeInTheDocument();
    });
  });
});
