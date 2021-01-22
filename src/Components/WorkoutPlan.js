import styled from "@emotion/styled";

const StyledPlan = styled.table`
  background: #cea8bb;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5px;
  margin-left: 50px;
  align-items: center;
  border-radius: 20px;
  width: 385px;
  height: max-content;
  border: 2px solid black;
`;

const StyledHeading = styled.th`
  align-items: center;
  text-decoration: underline;
  padding: 15px;
`;

const StyledData = styled.td`
  align-items: center;
  padding: 15px;
  width: min-content;
  flex-wrap: wrap;
`;
const WorkoutPlan = ({ label }) => {
  return (
    <StyledPlan>
      <tr>
        <StyledHeading>{label}</StyledHeading>
      </tr>

      <tr>
        <StyledData>Reverse Grip Lat Pulldown</StyledData>
        <StyledData>10</StyledData>
      </tr>
      <tr>
        <StyledData>Chest Fly</StyledData>
        <StyledData>100</StyledData>
      </tr>
    </StyledPlan>
  );
};

export default WorkoutPlan;
