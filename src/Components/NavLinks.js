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
      <Link to={`/musclegen/new-workout`}>
        <MenuItem onClick={handleClose}>New Workout</MenuItem>
      </Link>
      <Link to={`/musclegen/past-workouts`}>
        <MenuItem onClick={handleClose}>Past Workouts</MenuItem>
      </Link>
      <Link to={`/musclegen/exercises`}>
        <MenuItem onClick={handleClose}>Exercises</MenuItem>
      </Link>
      <Link to={`/musclegen/links`}>
        <MenuItem onClick={handleClose}>Links</MenuItem>
      </Link>
    </div>
  );
};
export default NavLinks;
