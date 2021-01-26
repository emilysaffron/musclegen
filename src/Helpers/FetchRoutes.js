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
        <Exercises exact path={"/exercises"} />
      </Router>
      <Router>
        <HomePage path={"/"} />
      </Router>
      <Router>
        <Links exact path={"/links"} />
      </Router>
      <Router>
        <NewWorkout exact path={"/new-workout"} />
      </Router>{" "}
      <Router>
        <PastWorkouts exact path={"/past-workouts"} />
      </Router>
      <Router>
        <WorkoutBuilder path={"/new-workout/upper-body"} label="UpperBody" />
      </Router>
      <Router>
        <WorkoutBuilder path={"/new-workout/lower-body"} label="LowerBody" />
      </Router>
      <Router>
        <Workout path={"/new-workout/upper-body/workout"} label="UpperBody" />
      </Router>
      <Router>
        <Workout path={"/new-workout/lower-body/workout"} label="LowerBody" />
      </Router>
      <Router>
        <Redirect noThrow from="/home" to={"/"} />
      </Router>
      <Router>
        <Redirect
          noThrow
          from="/new-workout/upper-body/workout/upperbody"
          to={"/new-workout/upper-body"}
        />
      </Router>
      <Router>
        <Redirect
          noThrow
          from="/new-workout/lower-body/workout/lowerbody"
          to={"/new-workout/lower-body"}
        />
      </Router>
    </div>
  );
};

export default createRoutes;
