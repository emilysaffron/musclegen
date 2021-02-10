import renderer from "react-test-renderer";
import StartStopButton from "./StartStopButton";

it("StartStopButton Snapshot", () => {
  const tree = renderer
    .create(
      <>
        <StartStopButton
          control="start"
          urlRoute="bodyTarget"
          onClick="onClick"
        />
        <StartStopButton
          control="stop"
          urlRoute="bodyTarget"
          onClick="onClick"
        />
      </>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
