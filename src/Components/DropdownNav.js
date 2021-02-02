import styled from "@emotion/styled";
import Menu from "./Menu";
import { useState } from "react";
const StyledModal = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  text-align: left;
  z-index: 100;
`;

const OpenMenu = styled.div`
  /* Is this font specific to the 'OPTIONS' text? If so fine, but if not you could apply this font-family value at a higher level, i.e.
  html {
    span {
      font-family: Palatino, URW Palladio L, serif;
    }
  }
   */
  font-family: Palatino, URW Palladio L, serif;
  font-size: 20px;
  color: black;
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
            labels={["Home", "New Workout", "Past Workouts", "Links"]}
            dropdown={true}
          />
        </StyledModal>
      ) : null}
    </div>
  );
};

export default DropDownNav;
