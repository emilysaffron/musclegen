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
        <Workout
          path={"/musclegen/NewWorkout/UpperBody/Workout"}
          label="UpperBody"
        />
      </Router>
      <Router>
        <Workout
          path={"/musclegen/NewWorkout/LowerBody/Workout"}
          label="LowerBody"
        />
      </Router>
      <Router>
        <Redirect noThrow from="/" to={"/musclegen"} />
      </Router>
      <Router>
        <Redirect
          noThrow
          from="/musclegen/NewWorkout/UpperBody/Workout/UpperBody/"
          to={"/musclegen/NewWorkout/UpperBody"}
        />
      </Router>
      <Router>
        <Redirect
          noThrow
          from="/musclegen/NewWorkout/LowerBody/Workout/LowerBody"
          to={"/musclegen/NewWorkout/LowerBody"}
        />
      </Router>
    </div>
  );
};

export default createRoutes;
