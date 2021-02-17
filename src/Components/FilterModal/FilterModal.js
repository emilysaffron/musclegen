import { useState } from "react";
import styled from "@emotion/styled";

import getExerciseTargets from "../../Helpers/getExerciseTargets";

const StyledModal = styled.div`
  background: #cea8bb;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: max-content;
  border-radius: 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 1rem;
  @media (max-width: 400px) {
    z-index: 100;
    width: 80%;
    margin-left: 50px;
  }
`;

const OpenButton = styled.button`
  background: #cea8bb;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: max-content;
  border: 2px solid black;
  position: -webkit-sticky;
  position: sticky;
  top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  @media (max-width: 400px) {
    z-index: 100;
    width: 100%;
    margin-left: 50px;
  }
`;

const ClearFilter = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  align-items: center;
  border-radius: 20px;
  width: max-content;
  cursor: pointer;
`;

const FilterModal = ({ filterExercises, half }) => {
  const [filterState, toggleFilterState] = useState(false);

  return filterState ? (
    <StyledModal
      key={Math.random()}
      onClick={() => toggleFilterState(!filterState)}
    >
      {getExerciseTargets(filterExercises, half)}
      <ClearFilter key={Math.random()} onClick={() => filterExercises("")}>
        Clear Filter
      </ClearFilter>
    </StyledModal>
  ) : (
    <OpenButton onClick={() => toggleFilterState(!filterState)}>
      Filter Exercises
    </OpenButton>
  );
};
export default FilterModal;
