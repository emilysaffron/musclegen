import styled from "@emotion/styled";
import { Link } from "@reach/router";

const ControlButton = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
`;

const StartStopButton = ({ control, urlRoute, onClick }) => {
  const url = urlRoute.replace(/\s+/g, "-");
  if (control === "start") {
    return (
      <Link to={`workout`}>
        <ControlButton onClick={onClick}> Start</ControlButton>
      </Link>
    );
  }

  if (control === "stop") {
    return (
      <Link to={`${url.toLowerCase()}`}>
        <ControlButton onClick={onClick}>Stop</ControlButton>
      </Link>
    );
  }
};

export default StartStopButton;
