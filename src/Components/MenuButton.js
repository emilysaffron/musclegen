import styled from "@emotion/styled";
import { Link } from "@reach/router";

const StyledButton = styled.button`
  border-radius: 20px;
  background: #a8bbce;
  width: 250px;
  height: 150px;
  padding: 20px;
  margin: 10px;
  font-size: 50px;
  color: black;
  cursor: pointer;
  outline: none;
`;

const DropDownButton = styled.button`
  background: none;
  width: max-content;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  border: none;
`;

const MenuButton = ({ label, dropdown }) => {
  const labelWithoutWhitespace = label.replace(/\s+/g, "-");

  return (
    <Link to={`${labelWithoutWhitespace.toLowerCase()}`}>
      {dropdown ? (
        <DropDownButton>{label}</DropDownButton>
      ) : (
        <StyledButton>{label}</StyledButton>
      )}
    </Link>
  );
};

export default MenuButton;
