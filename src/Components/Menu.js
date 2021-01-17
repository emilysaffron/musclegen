import styled from "@emotion/styled";
import GetButtonNames from "../Helpers/GetButtonNames";
const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Menu = ({ labels, onClick }) => {
  const buttons = GetButtonNames(labels, onClick);
  return <StyledButtons>{buttons}</StyledButtons>;
};

export default Menu;
