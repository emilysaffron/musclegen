/* eslint-disable array-callback-return */
import styled from "@emotion/styled";

const StyledHeading = styled.li`
  list-style: none;
  align-items: center;
  text-decoration: underline;
  padding: 15px;
`;

const getPastPlanLabel = (value, styled) => {
  let label = "";
  let date = "";
  let keys = "";
  let item = value[0];

  label = item.label;
  date = item.date;
  return styled ? (
    <StyledHeading key={keys}>
      {label} - on {date}
    </StyledHeading>
  ) : (
    label
  );
};

export default getPastPlanLabel;
