const UpdateReps = (updateRepNumber, repNumber, operation) => {
  console.log("before " + repNumber);
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
