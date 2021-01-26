const setWorkoutPlan = (workoutPlan, { currentPlan, setCurrentPlan }) => {
  setCurrentPlan(workoutPlan);

  return currentPlan;
};

export default setWorkoutPlan;
