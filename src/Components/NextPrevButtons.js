import styled from "@emotion/styled";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #cea8bb;
  width: 125px;
  height: 75px;
  padding: 20px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  outline: none;
`;

const NextPrevButtons = ({
  currentExerciseNumber,
  switchCurrentExerciseNumber,
  maxExerciseNumber,
  direction,
}) => {
  const handleNext = () => {
    if (currentExerciseNumber < maxExerciseNumber - 1) {
      switchCurrentExerciseNumber(currentExerciseNumber + 1);
    }
  };
  const handlePrevious = () => {
    if (currentExerciseNumber > 0) {
      switchCurrentExerciseNumber(currentExerciseNumber - 1);
    }
  };

  if (direction === "next") {
    return <StyledButton onClick={handleNext}>Next</StyledButton>;
  }
  if (direction === "previous") {
    return <StyledButton onClick={handlePrevious}>Previous</StyledButton>;
  }
};

export default NextPrevButtons;
