/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled";
import GetExerciseNames from "../../Helpers/GetExerciseNames";
import { useState, useEffect } from "react";
import FilterModal from "../FilterModal/FilterModal";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const StyledContent = styled.div`
  display: flex;
`;
const ExerciseList = ({
  exercises,
  toggleModal,
  modal,
  updateChosenExercise,
  half,
}) => {
  const [filter, applyFilter] = useState("");
  const [names, updateNames] = useState("");
  const filterExercises = (target) => {
    applyFilter(target);
  };
  useEffect(() => {
    updateNames(
      GetExerciseNames(
        exercises,
        toggleModal,
        modal,
        updateChosenExercise,
        filter
      )
    );
  }, [filter, exercises]);

  return (
    <StyledContent>
      <FilterModal filterExercises={filterExercises} half={half} />
      <StyledList>{names}</StyledList>
    </StyledContent>
  );
};
export default ExerciseList;
