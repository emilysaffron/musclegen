import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const Text = styled.div`
  &:visited {
    color: red;
  }
`;
const NavLinks = () => {
  return (
    <StyledLinks>
      <Link to={`/musclegen`}>
        <Text>Home</Text>
      </Link>
      <Link to={`/musclegen/new-workout`}>New Workout</Link>
      <Link to={`/musclegen/past-workouts`}>Past Workouts</Link>
      <Link to={`/musclegen/exercises`}>Exercises</Link>
      <Link to={`/musclegen/links`}>Links</Link>
    </StyledLinks>
  );
};
export default NavLinks;
