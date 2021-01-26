import Button from "../Components/Buttons";

const GetButtonNames = (labels, onClick) =>
  labels.map((item) => <Button label={item} onClick={onClick} />);
export default GetButtonNames;
