import styled from "@emotion/styled";
import ToggleModal from "../Helpers/ToggleModal";
import Menu from "./Menu";

const StyledModal = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  text-decoration: none;
  text-align: left;
  position: fixed;
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
  return navState ? (
    <StyledModal onMouseLeave={() => ToggleModal(toggleNavState, navState)}>
      <OpenMenu>OPTIONS</OpenMenu>

      <Menu
        labels={["Home", "New Workout", "Past Workouts", "Exercises", "Links"]}
        use="dropdown"
      />
    </StyledModal>
  ) : (
    <OpenMenu onMouseOver={() => ToggleModal(toggleNavState, navState)}>
      OPTIONS
    </OpenMenu>
  );
};

export default DropDownNav;
