const ConvertLabel = (label) => {
  if (label === "UpperBody") {
    return "upper";
  }
  if (label === "LowerBody") {
    return "lower";
  }
};
export default ConvertLabel;
