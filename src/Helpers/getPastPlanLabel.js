/* eslint-disable array-callback-return */
import styled from "@emotion/styled";

const StyledHeading = styled.li`
  list-style: none;
  align-items: center;
  text-decoration: underline;
  padding: 15px;
`;

const getPastPlanLabel = (value) => {
  let label = "";
  let date = "";
  let keys = "";
  return (
    <div>
      {Object.keys(value).map((key) => {
        keys = key;

        const item = value[key];
        label = item.label;
        date = item.date;
      })}
      <StyledHeading key={keys}>
        {label} - on {date}
      </StyledHeading>
    </div>
  );
};

export default getPastPlanLabel;
