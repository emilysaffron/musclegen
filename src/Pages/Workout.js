import StartStopButton from "../Components/StartStopButton";

const Workout = ({ workoutPlan, label }) => {
  return (
    <div>
      <StartStopButton control="stop" label={label} />
    </div>
  );
};

export default Workout;
