import dateUtils from "../dateUtils";

describe("dateUtils", () => {
  describe("formatDateForArticle", () => {
    it("should return '-' if passed date is not a date", () => {
      const formattedDate = dateUtils.formatDateForArticle("date");
      expect(formattedDate).toEqual("-");
    });

    it("should return formatted date if passed date is valid", () => {
      const formattedDate = dateUtils.formatDateForArticle(
        "2020-09-06T22:00:00"
      );
      expect(formattedDate).toEqual("22:00 Sep 6, 2020");
    });
  });
});
