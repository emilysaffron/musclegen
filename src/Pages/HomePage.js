import Menu from "../Components/Menu";
import styled from "@emotion/styled";

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
`;
const HomePage = () => {
  return (
    <StyledHome>
      <Menu
        labels={["New Workout", "Past Workouts", "Exercises", "Links"]}
        use="normal"
      />
    </StyledHome>
  );
};

export default HomePage;
