import Menu from "../Components/Menu/Menu";
import styled from "@emotion/styled";
import { CurrentPlanContext } from "../Helpers/CurrentPlanContext";
import { useContext } from "react";
const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;
const NewWorkout = () => {
  const { setCurrentPlan } = useContext(CurrentPlanContext);

  setCurrentPlan(null);
  return (
    <StyledMenu>
      <Menu options={["Upper Body", "Lower Body"]} dropdown={false} />
    </StyledMenu>
  );
};
export default NewWorkout;
