export const removeDuplicates = (array) => {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
};
