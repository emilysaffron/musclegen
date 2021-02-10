import Menu from "../Components/Menu/Menu";
import styled from "@emotion/styled";

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const HomePage = () => {
  return (
    <StyledHome>
      <Menu
        options={["New Workout", "Past Workouts", "Videos"]}
        dropdown={false}
      />
    </StyledHome>
  );
};

export default HomePage;
