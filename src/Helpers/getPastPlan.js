import styled from "@emotion/styled";

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
const StyledHeading = styled.li`
  list-style: none;
  align-items: center;
  text-decoration: underline;
  padding: 15px;
`;

const getPastPlan = (value) => {
  return (
    <div>
      {Object.keys(value).map((key) => {
        const item = value[key];
        <StyledHeading key={key + 3}> {item.label}Plan</StyledHeading>;

        return (
          <div key={Math.random()}>
            <StyledItems key={key}>
              {item.name} for {item.reps} reps
            </StyledItems>
          </div>
        );
      })}
    </div>
  );
};

export default getPastPlan;
