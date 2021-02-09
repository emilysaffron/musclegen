const AddExercise = (name, reps, AddToWorkoutPlan, workoutPlan) => {
  let currentWorkoutPlan = workoutPlan.slice();
  let index = currentWorkoutPlan.indexOf(name + " for " + reps + " rep(s)");

  if (index === -1) {
    currentWorkoutPlan.push(name + " for " + reps + " rep(s)");
  }
  AddToWorkoutPlan(currentWorkoutPlan);
};

export default AddExercise;
