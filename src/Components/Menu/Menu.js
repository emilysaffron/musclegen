import styled from "@emotion/styled";
import MenuButton from "../MenuButton/MenuButton";

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Menu = ({ labels, dropdown}) => {
  const GetMenuButtons = (labels, dropdown) => {
    return labels.map((item) => (
      <MenuButton label={item} key={item} dropdown={dropdown} />
    ));
  };
  const buttons = GetMenuButtons(labels, dropdown);
  return <StyledButtons>{buttons}</StyledButtons>;
};

export default Menu;
