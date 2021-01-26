import StartStopButton from "../Components/StartStopButton";
import { CurrentPlanContext } from "../Helpers/CurrentPlanContext";
import MakeObjects from "../Helpers/MakeObjects";
import { useContext } from "react";
const Workout = ({ label }) => {
  const { currentPlan } = useContext(CurrentPlanContext);
  if (currentPlan) {
    const plan = MakeObjects(currentPlan);
  }
  return currentPlan ? (
    <div>
      <StartStopButton control="stop" label={label} />
      <div>{currentPlan}</div>
    </div>
  ) : (
    <div>
      <StartStopButton control="stop" label={label} />
      <div>Add Exercises To Plan</div>
    </div>
  );
};

export default Workout;
