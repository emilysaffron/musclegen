import StartStopButton from "../Components/StartStopButton";
import WorkoutPlan from "../Components/WorkoutPlan";
const Workout = ({ workoutPlan, label }) => {
  let currentPlan = require("../Data/currentPlan.json");

  return (
    <div>
    
      <StartStopButton control="stop" label={label} />
    </div>
  );
};

export default Workout;
