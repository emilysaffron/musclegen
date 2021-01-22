const AddExercise = (name, reps, AddToWorkoutPlan, workoutPlan) => {
  let currentWorkoutPlan = workoutPlan.slice();
  currentWorkoutPlan.push(name + " for " + reps + " rep(s)");
  AddToWorkoutPlan(currentWorkoutPlan);
};

export default AddExercise;
