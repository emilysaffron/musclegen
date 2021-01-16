import Button from "../Components/Buttons";
import styled from "@emotion/styled";

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  const clicked = () => {
    console.log("yep");
  };

  return (
    <StyledButtons>
      <Button label="New Workout" onClick={clicked} />
      <Button label="Past Workouts" onClick={clicked} />
      <Button label="Exercises" onClick={clicked} />
      <Button label="Links" onClick={clicked} />
    </StyledButtons>
  );
};

export default HomePage;
