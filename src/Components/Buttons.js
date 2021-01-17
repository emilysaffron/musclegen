import styled from "@emotion/styled";
import { Link } from "@reach/router";
const StyledButton = styled.button`
  border-radius: 20px;
  background: #d1c5cb;
  width: 250px;
  height: 150px;
  margin: 20px;
  font-size: 50px;
  font-family: verdana;
  color: #9c4459;
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
