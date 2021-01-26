import Button from "../Components/Buttons";

const GetButtonNames = (labels, use) => {
  return labels.map((item) => <Button label={item} key={item} use={use} />);
};
export default GetButtonNames;
