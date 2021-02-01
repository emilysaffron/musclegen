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
  let keys = "";
  return (
    <div>
      {Object.keys(value).map((key) => {
        keys = key;

        const item = value[key];
        label = item.label;
      })}
      <StyledHeading key={keys}>{label}</StyledHeading>
    </div>
  );
};

export default getPastPlanLabel;
