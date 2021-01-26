import React from "react";
import { Link } from "@reach/router";

const NavLinks = () => {
  return (
    <div>
      <Link to={`/musclegen`}>Home</Link>
      <Link to={`/musclegen/new-workout`}>New Workout</Link>
      <Link to={`/musclegen/past-workouts`}>Past Workouts</Link>
      <Link to={`/musclegen/exercises`}>Exercises</Link>
      <Link to={`/musclegen/links`}>Links</Link>
    </div>
  );
};
export default NavLinks;
