import styled from "@emotion/styled";
import GetButtonNames from "../Helpers/GetButtonNames";
const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Menu = ({ labels, use }) => {
  const buttons = GetButtonNames(labels, use);
  return <StyledButtons>{buttons}</StyledButtons>;
};

export default Menu;
