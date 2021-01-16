import styled from "@emotion/styled";

const StyledButton = styled.button`
  border-radius: 10px;
  background: #cdcdcd;
  width: 80px;
`;

const Button = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
