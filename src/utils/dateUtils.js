import dateFormats from "../constants/dateFormats";
import dayjs from "dayjs";
import invalidData from "../constants/invalidData";

const formatDateForArticle = (date) => {
  const formattedDate = dayjs(date).format(dateFormats.articleFormat);
  return formattedDate !== invalidData.invalidDate ? formattedDate : "-";
};
const dateUtils = { formatDateForArticle };

export default dateUtils;
