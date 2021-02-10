import styled from "@emotion/styled";
import Menu from "../Menu/Menu";
import { useState } from "react";
const StyledModal = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  text-align: left;
  z-index: 100;
`;

const OpenMenu = styled.div`
  font-size: 20px;
  cursor: pointer;
  align-self: baseline;
  align-items: center;
  flex-direction: column;
`;

const DropDownNav = () => {
  const [navState, toggleNavState] = useState(false);

  return (
    <div
      style={{ position: "fixed" }}
      onMouseEnter={() => toggleNavState(!navState)}
      onMouseLeave={() => toggleNavState(!navState)}
    >
      <OpenMenu onMouseEnter={() => toggleNavState(!navState)}>
        OPTIONS
      </OpenMenu>
      {navState ? (
        <StyledModal>
          <Menu
            options={["Home", "New Workout", "Past Workouts", "Videos"]}
            dropdown={true}
          />
        </StyledModal>
      ) : null}
    </div>
  );
};

export default DropDownNav;
