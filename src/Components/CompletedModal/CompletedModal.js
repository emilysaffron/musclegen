import styled from "@emotion/styled";
import SaveButton from "../SaveButton/SaveButton";
const StyledModal = styled.div`
  width: 450px;
  height: 450px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CompletedModal = ({
  modal,
  toggleModal,
  currentPlan,
  toggleQuitCurrentWorkout,
}) => {
  return modal ? (
    <StyledModal>
      <SaveButton
        modal={modal}
        toggleModal={toggleModal}
        currentPlan={currentPlan}
        toggleQuitCurrentWorkout={toggleQuitCurrentWorkout}
      />
    </StyledModal>
  ) : null;
};
export default CompletedModal;
