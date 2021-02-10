import styled from "@emotion/styled";
import MenuButton from "../MenuButton/MenuButton";

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Menu = ({ options, dropdown}) => {
  const GetMenuButtons = (options, dropdown) => {
    return options.map((item) => (
      <MenuButton option={item} key={item} dropdown={dropdown} />
    ));
  };
  const buttons = GetMenuButtons(options, dropdown);
  return <StyledButtons>{buttons}</StyledButtons>;
};

export default Menu;
