import styled from "@emotion/styled";

const StyledReps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  align-items: center;
  border-radius: 20px;
`;

const StyledButton = styled.button`
  border-radius: 20px;
  background: #a8bbce;
  width: 150px;
  height: 90px;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  outline: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const StyledNum = styled.div`
  background: #cea8bb;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5px;
  color: black;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  justify-content: center;
`;

const RepCounter = ({ repNumber, updateRepNumber }) => {
  const handleClick = (operation) => {
    if (operation === "plus") {
      updateRepNumber(repNumber + 1);
    }
    if (operation === "minus") {
      if (repNumber > 0) {
        updateRepNumber(repNumber - 1);
      }
    }
  };

  return (
    <StyledReps>
      <ButtonsContainer>
        <StyledButton onClick={() => handleClick("plus")}>
          Increase Reps
        </StyledButton>
        <StyledButton onClick={() => handleClick("minus")}>
          Decrease Reps
        </StyledButton>
      </ButtonsContainer>
      <StyledNum>{repNumber}</StyledNum>
    </StyledReps>
  );
};

export default RepCounter;
