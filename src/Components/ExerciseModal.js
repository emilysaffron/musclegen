import styled from "@emotion/styled";
import RepCounter from "./RepCounter";
const StyledModal = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExerciseModal = ({ modal }) => {
  return modal ? (
    <StyledModal>
      HI
      <RepCounter />
    </StyledModal>
  ) : null;
};
export default ExerciseModal;
