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
  font-family: Palatino, URW Palladio L, serif;
  color: black;
  &:hover {
    cursor: pointer;
  }
  outline: none;
`;

const DropDownButton = styled.button`
  background: none;

  width: max-content;
  font-size: 20px;
  font-family: Palatino, URW Palladio L, serif;
  color: black;
  &:hover {
    cursor: pointer;
  }
  outline: none;
  border: none;
`;

const Button = ({ label, use }) => {
  const labelWithoutWhitespace = label.replace(/\s+/g, "-");
  let dropdown = false;
  if (use === "dropdown") {
    dropdown = true;
  }
  return dropdown ? (
    <Link to={`${labelWithoutWhitespace.toLowerCase()}`}>
      <DropDownButton>{label}</DropDownButton>
    </Link>
  ) : (
    <Link to={`${labelWithoutWhitespace.toLowerCase()}`}>
      <StyledButton>{label}</StyledButton>
    </Link>
  );
};

export default Button;
