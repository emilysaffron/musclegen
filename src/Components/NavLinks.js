import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import { Link } from "@reach/router";

const NavLinks = ({ setAnchorEl }) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Link to={`/musclegen`}>
        <MenuItem onClick={handleClose}>Home</MenuItem>
      </Link>
      <Link to={`/musclegen/NewWorkout`}>
        <MenuItem onClick={handleClose}>New Workout</MenuItem>
      </Link>
      <Link to={`/musclegen/PastWorkouts`}>
        <MenuItem onClick={handleClose}>Past Workouts</MenuItem>
      </Link>
      <Link to={`/musclegen/Exercises`}>
        <MenuItem onClick={handleClose}>Exercises</MenuItem>
      </Link>
      <Link to={`/musclegen/Links`}>
        <MenuItem onClick={handleClose}>Links</MenuItem>
      </Link>
    </div>
  );
};
export default NavLinks;
