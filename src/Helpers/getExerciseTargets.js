/* eslint-disable array-callback-return */
import FetchBodyHalf from "./FetchBodyHalf";
import styled from "@emotion/styled";
const StyledFilter = styled.button`
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

const getExerciseTargets = (filterExercises, half) => {
  let exercises = FetchBodyHalf(half);
  let labelsSoFar = [];

  return exercises.map((item) => {
    let label = item.model.target;
    if (labelsSoFar.indexOf(label) === -1) {
      labelsSoFar.push(label);
      return (
        <StyledFilter
          key={Math.random()}
          onClick={() => filterExercises(label)}
        >
          {label}
        </StyledFilter>
      );
    }
  });
};

export default getExerciseTargets;
