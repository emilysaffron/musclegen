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
      <Menu labels={["Workouts", "Meals"]} use="normal" />
    </StyledLinks>
  );
};
export default Links;
