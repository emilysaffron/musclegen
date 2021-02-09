import { Router, Redirect } from "@reach/router";
import HomePage from "../Pages/HomePage";
import NewWorkout from "../Pages/NewWorkout";
import PastWorkouts from "../Pages/PastWorkouts";
import WorkoutBuilder from "../Pages/WorkoutBuilder";
import Workout from "../Pages/Workout";
import Videos from "../Pages/Videos";
const fetchRoutes = () => {
  return (
    <>
      <Router>
        <HomePage path={"/"} />
      </Router>
      <Router>
        <NewWorkout exact path={"/new-workout"} />
      </Router>
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
        <Videos path={"/videos"} />
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
    </>
  );
};

export default fetchRoutes;
