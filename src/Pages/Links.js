import Menu from "../Components/Menu";
import styled from "@emotion/styled";

const StyledLinks = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const Links = () => {
  return (
    <StyledLinks>
      <Menu labels={["Videos", "Meals"]} use="normal" />
    </StyledLinks>
  );
};
export default Links;
