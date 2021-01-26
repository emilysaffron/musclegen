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

const Button = ({ label, onClick }) => {
  const labelWithoutWhitespace = label.replace(/\s+/g, "-");

  return (
    <Link to={`${labelWithoutWhitespace.toLowerCase()}`}>
      <StyledButton>{label}</StyledButton>
    </Link>
  );
};

export default Button;
