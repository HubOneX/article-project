import axios from "axios";
import {
  mockArticle,
  mockArticleEmptyValues,
  mockArticleResponse,
} from "../../mocks/mockArticle";
import { useGetArticleById } from "./useGetArticleById";
import { renderHook, waitFor } from "@testing-library/react";

jest.mock("axios");
const mockedAxios = axios;

describe("useGetArticleById", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("isError", () => {
    it("should be TRUE if there WAS an error when fetching data", async () => {
      mockedAxios.get.mockResolvedValueOnce(new Error("error"));
      const { result } = renderHook(useGetArticleById);

      await waitFor(() => {
        expect(result.current.isError).toBeTruthy();
      });
    });

    it("should be FALSE if there WAS NO error when fetching data", async () => {
      mockedAxios.get.mockResolvedValueOnce({});
      const { result } = renderHook(useGetArticleById);

      await waitFor(() => {
        expect(result.current.isError).toBeFalsy();
      });
    });
  });

  describe("article", () => {
    it("should be correctly parsed from response", async () => {
      mockedAxios.get.mockResolvedValueOnce(mockArticleResponse);

      const { result } = renderHook(useGetArticleById);

      await waitFor(() => {
        expect(JSON.stringify(result.current.article)).toEqual(
          JSON.stringify(mockArticle)
        );
      });
    });

    it("should replace undefined fields with empty strings", async () => {
      const mockArticleResponse = {
        data: {
          elements: {
            author: { value: undefined },
            heading: { value: undefined },
            date: { value: undefined },
            mainImage: {
              value: {
                leadImage: { renditions: { lead: { source: undefined } } },
                leadImageCaption: { value: undefined },
              },
            },
            body: {
              values: undefined,
            },
          },
        },
      };
      mockedAxios.get.mockResolvedValueOnce(mockArticleResponse);

      const { result } = renderHook(useGetArticleById);

      await waitFor(() => {
        expect(JSON.stringify(result.current.article)).toEqual(
          JSON.stringify(mockArticleEmptyValues)
        );
      });
    });

    it("should object with empty strings if elements in response is undefined", async () => {
      const mockArticleResponse = {
        data: {
          elements: undefined,
        },
      };
      mockedAxios.get.mockResolvedValueOnce(mockArticleResponse);

      const { result } = renderHook(useGetArticleById);

      await waitFor(() => {
        expect(JSON.stringify(result.current.article)).toEqual(
          JSON.stringify(mockArticleEmptyValues)
        );
      });
    });
  });
});
