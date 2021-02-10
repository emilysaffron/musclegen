const ConvertBodyTarget = (bodyTarget) => {
  if (bodyTarget === "UpperBody") {
    return "upper";
  }
  if (bodyTarget === "LowerBody") {
    return "lower";
  }
};
export default ConvertBodyTarget;
