import Menu from "../Components/Menu/Menu";
import styled from "@emotion/styled";

const StyledLinks = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const Links = () => {
  return (
    <StyledLinks>
      <Menu labels={["Videos", "Meals"]} dropdown={false} />
    </StyledLinks>
  );
};
export default Links;
