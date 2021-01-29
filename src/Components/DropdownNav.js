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

const OpenMenu = styled.div`
  font-family: Palatino, URW Palladio L, serif;
  font-size: 20px;
  color: black;
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
      <OpenMenu onMouseOver={() => ToggleModal(toggleNavState, navState)}>
        OPTIONS
      </OpenMenu>
      {navState ? (
        <StyledModal onMouseLeave={() => ToggleModal(toggleNavState, navState)}>
          <Menu
            labels={[
              "Home",
              "New Workout",
              "Past Workouts",
              "Exercises",
              "Links",
            ]}
            use="dropdown"
          />
        </StyledModal>
      ) : null}
    </div>
  );
};

export default DropDownNav;
