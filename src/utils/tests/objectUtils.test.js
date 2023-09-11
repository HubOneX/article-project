import objectUtils from "../objectUtils";

describe("objectUtils", () => {
  describe("isEmptyObject", () => {
    it("should return FALSE if object IS NOT empty", () => {
      const result = objectUtils.isEmptyObject({ first: "1." });
      expect(result).toBeFalsy();
    });

    it("should return TRUE if object IS empty", () => {
      const result = objectUtils.isEmptyObject({});
      expect(result).toBeTruthy();
    });
  });
});
