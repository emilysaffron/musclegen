import Menu from "../Components/Menu";
import clicked from "../Helpers/ButtonClick";
const HomePage = () => {
  return (
    <Menu
      labels={["New Workout", "Past Workouts", "Exercises", "Links"]}
      onClick={clicked}
    />
  );
};

export default HomePage;
