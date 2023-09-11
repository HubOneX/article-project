import { act, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import * as fetchHook from "./hooks/useGetArticleById/useGetArticleById";
import {
  mockArticle,
  mockArticleEmptyValues,
  mockArticleResponse,
} from "./mocks/mockArticle";
import axios from "axios";
import renderer from "react-test-renderer";

// mocking axios to clean up console output from errors, a bit redundant
jest.mock("axios");
const mockedAxios = axios;

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedAxios.get.mockResolvedValueOnce(mockArticleResponse);
  });

  describe("Loader", () => {
    it("should be displayed on initial render", () => {
      render(<App />);
      const loader = screen.getByText("Loading...");
      expect(loader).toBeInTheDocument();
    });

    it("should be displayed when article is an empty object and there isError = false", async () => {
      jest.spyOn(fetchHook, "useGetArticleById").mockImplementation(() => {
        return {
          article: {},
          isError: false,
        };
      });

      render(<App />);
      await waitFor(() => {
        const loader = screen.queryByText("Loading...");
        expect(loader).toBeInTheDocument();
      });
    });

    it("should not be displayed when article is present", async () => {
      jest.spyOn(fetchHook, "useGetArticleById").mockImplementation(() => {
        return {
          article: mockArticle,
        };
      });

      render(<App />);
      await waitFor(() => {
        const loader = screen.queryByText("Loading...");
        expect(loader).not.toBeInTheDocument();
      });
    });

    it("should not be displayed when isError is TRUE", () => {
      jest.spyOn(fetchHook, "useGetArticleById").mockImplementation(() => {
        return {
          isError: true,
        };
      });

      render(<App />);
      const loader = screen.queryByText("Loading...");
      expect(loader).not.toBeInTheDocument();
    });
  });

  it("should match the snapshot when article has all values", () => {
    jest.spyOn(fetchHook, "useGetArticleById").mockImplementation(() => {
      return {
        article: mockArticle,
      };
    });

    let app;

    act(() => {
      app = renderer.create(<App />);
    });

    expect(app).toMatchSnapshot();
  });

  it("should match the snapshot when article has only empty strings", () => {
    jest.spyOn(fetchHook, "useGetArticleById").mockImplementation(() => {
      return {
        article: mockArticleEmptyValues,
      };
    });

    let app;

    act(() => {
      app = renderer.create(<App />);
    });

    expect(app).toMatchSnapshot();
  });
});
