import Menu from "../Components/Menu";
import styled from "@emotion/styled";

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;
const NewWorkout = () => {
  return (
    <StyledMenu>
      <Menu labels={["Upper Body", "Lower Body"]} use="normal" />
    </StyledMenu>
  );
};
export default NewWorkout;
