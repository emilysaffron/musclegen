const UpdateReps = (updateRepNumber, repNumber, operation) => {
  if (operation === "plus") {
    updateRepNumber(repNumber + 1);
  }
  if (operation === "minus") {
    if (repNumber > 0) {
      updateRepNumber(repNumber - 1);
    }
  }
};
export default UpdateReps;
