import { Router, Redirect } from "@reach/router";
import Exercises from "../Pages/Exercises";
import HomePage from "../Pages/HomePage";
import Links from "../Pages/Links";
import NewWorkout from "../Pages/NewWorkout";
import PastWorkouts from "../Pages/PastWorkouts";
import WorkoutBuilder from "../Pages/WorkoutBuilder";
import Workout from "../Pages/Workout";
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
        <WorkoutBuilder
          path={"/musclegen/NewWorkout/UpperBody"}
          label="UpperBody"
        />
      </Router>
      <Router>
        <WorkoutBuilder
          path={"/musclegen/NewWorkout/LowerBody"}
          label="LowerBody"
        />
      </Router>
      <Router>
        <Workout path={"/musclegen/Workout"} />
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
      <Router>
        <Redirect
          noThrow
          from="/musclegen/NewWorkout/Upper%20Body"
          to={"/musclegen/NewWorkout/UpperBody"}
        />
      </Router>{" "}
      <Router>
        <Redirect
          noThrow
          from="/musclegen/NewWorkout/Lower%20Body"
          to={"/musclegen/NewWorkout/LowerBody"}
        />
      </Router>
      <Router>
        <Redirect
          noThrow
          from="/musclegen/NewWorkout/LowerBody/Workout"
          to={"/musclegen/Workout"}
        />
      </Router>
      <Router>
        <Redirect
          noThrow
          from="/musclegen/NewWorkout/UpperBody/Workout"
          to={"/musclegen/Workout"}
        />
      </Router>
    </div>
  );
};

export default createRoutes;
