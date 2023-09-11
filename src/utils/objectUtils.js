const isEmptyObject = (object) => {
  return Object.keys(object).length === 0;
};

const objectUtils = { isEmptyObject };

export default objectUtils;
