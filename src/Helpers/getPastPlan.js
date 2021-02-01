import styled from "@emotion/styled";

const StyledPlan = styled.ul`
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
const StyledItems = styled.li`
  list-style: none;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const getPastPlan = (value) => {
  return (
    <StyledPlan>
      {Object.keys(value).map((key) => {
        const item = value[key];
        console.log("valuenow = " + item.name);
        return (
          <StyledItems>
            {item.name} for {item.reps} reps
          </StyledItems>
        );
      })}
    </StyledPlan>
  );
};

export default getPastPlan;
