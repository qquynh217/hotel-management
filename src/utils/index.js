export const formatDate = (date) => {
  return date.$y + "-" + (date.$M + 1) + "-" + date.$D;
};
