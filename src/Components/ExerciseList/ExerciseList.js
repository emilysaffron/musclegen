/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled";
import GetExerciseNames from "../../Helpers/GetExerciseNames";
import { useState, useEffect } from "react";
import FilterModal from "../FilterModal/FilterModal";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const filterExercises = (label) => {
    applyFilter(label);
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
      {FilterModal(filterExercises, half)}
      <StyledList>{names}</StyledList>
    </StyledContent>
  );
};
export default ExerciseList;
