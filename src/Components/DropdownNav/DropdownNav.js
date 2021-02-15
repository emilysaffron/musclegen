import styled from "@emotion/styled";
import Menu from "../Menu/Menu";
import { useState } from "react";
const StyledModal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: left;
  z-index: 100;
  @media (max-width: 380px) {
    background-color: rgb(242, 242, 242, 0.9);
    text-align: center;
    height: 100%;
    width: 100%;
    justify-content: center;
    font-size: xxx-large;
  }
`;

const OpenMenu = styled.div`
  position: fixed;
  font-size: 20px;
  cursor: pointer;
  align-self: baseline;
  align-items: center;
  flex-direction: column;
`;

const DropDownNav = () => {
  const [navState, toggleNavState] = useState(false);

  return navState ? (
    <StyledModal>
      <div
        onClick={() => toggleNavState(!navState)}
        style={{ cursor: "pointer" }}
      >
        X
      </div>

      <Menu
        options={["Home", "New Workout", "Past Workouts", "Videos"]}
        dropdown={true}
      />
    </StyledModal>
  ) : (
    <OpenMenu onClick={() => toggleNavState(!navState)}>OPTIONS</OpenMenu>
  );
};

export default DropDownNav;
