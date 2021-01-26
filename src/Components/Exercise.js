import styled from "@emotion/styled";
import ToggleModal from "../Helpers/ToggleModal";
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
  &:hover {
    cursor: pointer;
  }
`;

const Exercise = ({
  name,
  target,
  toggleModal,
  modal,
  updateChosenExercise,
}) => {
  const HandleClick = () => {
    ToggleModal(toggleModal, modal);
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
