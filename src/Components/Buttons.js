import styled from "@emotion/styled";
import { Link } from "@reach/router";
const StyledButton = styled.button`
  border-radius: 20px;
  background: #989898;
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
  return (
    <Link to={`${label}`}>
      <StyledButton onClick={onClick}>{label}</StyledButton>;
    </Link>
  );
};

export default Button;
