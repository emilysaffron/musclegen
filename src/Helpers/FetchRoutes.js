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
        <Exercises exact path={"musclegen/exercises"} />
      </Router>
      <Router>
        <HomePage path={"/musclegen"} />
      </Router>
      <Router>
        <Links exact path={"musclegen/links"} />
      </Router>
      <Router>
        <NewWorkout exact path={"musclegen/new-workout"} />
      </Router>{" "}
      <Router>
        <PastWorkouts exact path={"musclegen/past-workouts"} />
      </Router>
      <Router>
        <WorkoutBuilder
          path={"/musclegen/new-workout/upper-body"}
          label="UpperBody"
        />
      </Router>
      <Router>
        <WorkoutBuilder
          path={"/musclegen/new-workout/lower-body"}
          label="LowerBody"
        />
      </Router>
      <Router>
        <Workout
          path={"/musclegen/new-workout/upper-body/workout"}
          label="UpperBody"
        />
      </Router>
      <Router>
        <Workout
          path={"/musclegen/new-workout/lower-body/workout"}
          label="LowerBody"
        />
      </Router>
      <Router>
        <Redirect noThrow from="/" to={"/musclegen"} />
      </Router>
      <Router>
        <Redirect
          noThrow
          from="/musclegen/new-workout/upper-body/workout/upperbody/"
          to={"/musclegen/new-workout/upper-body"}
        />
      </Router>
      <Router>
        <Redirect
          noThrow
          from="/musclegen/new-workout/lower-body/workout/lowerbody"
          to={"/musclegen/new-workout/lower-body"}
        />
      </Router>
    </div>
  );
};

export default createRoutes;
