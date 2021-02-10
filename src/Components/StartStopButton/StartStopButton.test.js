import renderer from "react-test-renderer";
import StartStopButton from "./StartStopButton";

it("StartStopButton Snapshot", () => {
  const tree = renderer
    .create(
      <>
        <StartStopButton
          control="start"
          bodyTarget="bodyTarget"
          onClick="onClick"
        />
        <StartStopButton
          control="stop"
          bodyTarget="bodyTarget"
          onClick="onClick"
        />
      </>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
