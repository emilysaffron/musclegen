import styled from "@emotion/styled";
import GetExerciseNames from "../Helpers/GetExerciseNames";
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExerciseList = ({
  exercises,
  toggleModal,
  modal,
  updateChosenExercise,
}) => {
  const names = GetExerciseNames(
    exercises,
    toggleModal,
    modal,
    updateChosenExercise
  );

  return <StyledList>{names}</StyledList>;
};
export default ExerciseList;
