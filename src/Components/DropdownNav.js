import styled from "@emotion/styled";
import ToggleModal from "../Helpers/ToggleModal";
import Menu from "./Menu";

const StyledModal = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  text-align: left;
  z-index: 100;
`;

// Should this be a div? It appears to be text?
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
  /* As mentioned - the cursor: pointer style is only relevant when hovered, it doesn't need to be wrapped in this :hover selector */
  &:hover {
    cursor: pointer;
  }
  align-self: baseline;
  align-items: center;
  flex-direction: column;
`;

const DropDownNav = ({ navState, toggleNavState }) => {
  return (
    <div style={{ position: "fixed" }}>
      {/* I think onMouseEnter _may_ prove more reliable */}
      <OpenMenu onMouseOver={() => ToggleModal(toggleNavState, navState)}>
        OPTIONS
      </OpenMenu>
      {navState ? (
        // The onLeave function here means that hovering on 'OPTIONS' and removing the mouse doesn't hide the menu
        // Once you have brought the ToggleModal function logic and state into this component, look at refactoring this so that the onEnter / onLeave works on the wrapping div
        <StyledModal onMouseLeave={() => ToggleModal(toggleNavState, navState)}>
          <Menu
            labels={["Home", "New Workout", "Past Workouts", "Links"]}
            use="dropdown"
          />
        </StyledModal>
      ) : null}
    </div>
  );
};

export default DropDownNav;
