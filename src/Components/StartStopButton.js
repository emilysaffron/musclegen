import styled from "@emotion/styled";
import { Link } from "@reach/router";

const ControlButton = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

const StartStopButton = ({ control, label, onClick }) => {
  const labelWithoutWhitespace = label.replace(/\s+/g, "-");
  if (control === "start") {
    return (
      <Link to={`workout`}>
        <ControlButton onClick={onClick}> Start</ControlButton>
      </Link>
    );
  }

  if (control === "stop") {
    return (
      <Link to={`${labelWithoutWhitespace.toLowerCase()}`}>
        <ControlButton onClick={onClick}>Stop</ControlButton>
      </Link>
    );
  }
};

export default StartStopButton;
