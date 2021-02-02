import renderer from "react-test-renderer";
import StartStopButton from "./StartStopButton";

it("StartStopButton Snapshot", () => {
  const tree = renderer
    .create(
      <>
        <StartStopButton control="start" label="label" onClick="onClick" />
        <StartStopButton control="stop" label="label" onClick="onClick" />
      </>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
