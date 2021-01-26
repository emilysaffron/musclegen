import styled from "@emotion/styled";
import ToggleModal from "../Helpers/ToggleModal";
import Menu from "./Menu";
import quit from "../quit.png";

const StyledModal = styled.div`
  width: 300px;
  height: 100%;
  align-self: baseline;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  position: fixed;
  z-index: 100;
  border-right: black;
  border-right-color: black;
  border-right-style: solid;
  border-right-width: thin;
`;
const Quit = styled.div`
  width: 40px;
  align-self: baseline;
  &:hover {
    cursor: pointer;
  }
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
    <StyledModal>
      <Quit onClick={() => ToggleModal(toggleNavState, navState)}>
        <img width="40px" src={quit} alt="quit" />
      </Quit>
      <Menu
        labels={["Home", "New Workout", "Past Workouts", "Exercises", "Links"]}
        use="dropdown"
      />
    </StyledModal>
  ) : (
    <OpenMenu onClick={() => ToggleModal(toggleNavState, navState)}>
      OPTIONS
    </OpenMenu>
  );
};

export default DropDownNav;
