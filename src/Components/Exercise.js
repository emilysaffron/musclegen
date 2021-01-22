import styled from "@emotion/styled";

const StyledExercise = styled.div`
  background: #a8bbce;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  align-items: center;
  border-radius: 20px;
  width: 385px;
  height: 50px;
`;

const Exercise = ({ name, target }) => {
  return (
    <StyledExercise>
      <div>{name}</div>
      <div>Target: {target}</div>
    </StyledExercise>
  );
};
export default Exercise;
