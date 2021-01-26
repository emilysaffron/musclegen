const setWorkoutPlan = (workoutPlan, { currentPlan, setCurrentPlan }) => {
  setCurrentPlan(workoutPlan);
  console.log("HERE " + currentPlan);
  return currentPlan;
};

export default setWorkoutPlan;
