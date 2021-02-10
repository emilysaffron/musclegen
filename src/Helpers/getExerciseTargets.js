/* eslint-disable array-callback-return */
import FetchBodyHalf from "./FetchBodyHalf/FetchBodyHalf";
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
  let targetsSoFar = [];

  return exercises.map((item) => {
    let target = item.model.target;
    if (targetsSoFar.indexOf(target) === -1) {
      targetsSoFar.push(target);
      return (
        <StyledFilter
          key={Math.random()}
          onClick={() => filterExercises(target)}
        >
          {target}
        </StyledFilter>
      );
    }
  });
};

export default getExerciseTargets;
