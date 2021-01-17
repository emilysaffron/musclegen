import { Router, Redirect } from "@reach/router";
import Exercises from "../Pages/Exercises";
import HomePage from "../Pages/HomePage";
import Links from "../Pages/Links";
import NewWorkout from "../Pages/NewWorkout";
import PastWorkouts from "../Pages/PastWorkouts";
const createRoutes = () => {
  return (
    <div>
      <Router>
        <Exercises exact path={"musclegen/Exercises"} />
      </Router>
      <Router>
        <HomePage path={"/musclegen"} />
      </Router>
      <Router>
        <Links exact path={"musclegen/Links"} />
      </Router>
      <Router>
        <NewWorkout exact path={"musclegen/NewWorkout"} />
      </Router>{" "}
      <Router>
        <PastWorkouts exact path={"musclegen/PastWorkouts"} />
      </Router>
      <Router>
        <Redirect noThrow from="/" to={"/musclegen"} />
      </Router>
      <Router>
        <Redirect
          noThrow
          from="/musclegen/New%20Workout"
          to={"/musclegen/NewWorkout"}
        />
      </Router>
      <Router>
        <Redirect
          noThrow
          from="/musclegen/Past%20Workouts"
          to={"/musclegen/PastWorkouts"}
        />
      </Router>
    </div>
  );
};

export default createRoutes;
