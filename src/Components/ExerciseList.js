import styled from "@emotion/styled";
import GetExerciseNames from "../Helpers/GetExerciseNames";
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExerciseList = ({ exercises, toggleModal,modal }) => {
  const names = GetExerciseNames(exercises, toggleModal,modal);

  return <StyledList>{names}</StyledList>;
};
export default ExerciseList;
