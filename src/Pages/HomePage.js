import Menu from "../Components/Menu";

const HomePage = () => {
  const clicked = () => {
    console.log("yep");
  };

  return (
    <Menu
      labels={["New Workout", "Past Workouts", "Exercises", "Links"]}
      onClick={clicked}
    />
  );
};

export default HomePage;
