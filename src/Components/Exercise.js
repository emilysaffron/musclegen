import styled from "@emotion/styled";
const StyledExercise = styled.button`
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
  cursor: pointer;
`;

const Exercise = ({
  name,
  target,
  toggleModal,
  modal,
  updateChosenExercise,
}) => {
  const HandleClick = () => {
    toggleModal(!modal);
    updateChosenExercise(name);
  };

  return (
    <StyledExercise onClick={HandleClick}>
      <div>{name}</div>
      <div>Target: {target}</div>
    </StyledExercise>
  );
};
export default Exercise;
