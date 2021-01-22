import styled from "@emotion/styled";
import { useState } from "react";
import UpdateReps from "../Helpers/UpdateReps";
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
  height: 150px;
  padding: 20px;
  margin: 10px;
  font-family: Palatino, URW Palladio L, serif;
  color: black;
  &:hover {
    cursor: pointer;
  }
  outline: none;
`;

const RepCounter = () => {
  const [repNumber, updateRepNumber] = useState(0);

  const handleClick = (operation) => {
    UpdateReps(updateRepNumber, repNumber, operation);
  };

  return (
    <StyledReps>
      <StyledButton onClick={() => handleClick("plus")}> + </StyledButton>
      <StyledButton onClick={() => handleClick("minus")}> - </StyledButton>
      {repNumber}
    </StyledReps>
  );
};

export default RepCounter;
