import styled from "@emotion/styled";
// This is just a simple mapping function, only used by one component - it doesn't need to be a helper
import GetButtonNames from "../Helpers/GetButtonNames";
const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Menu = ({ labels, use }) => {
  // This is actually returning Button components, rather than just their names (which suggests string values) - consider renaming.
  const buttons = GetButtonNames(labels, use);
  return <StyledButtons>{buttons}</StyledButtons>;
};

export default Menu;
