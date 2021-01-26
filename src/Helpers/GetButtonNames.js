import Button from "../Components/Buttons";

const GetButtonNames = (labels, onClick) => {
  return labels.map((item) => (
    <Button label={item} onClick={onClick} key={item} />
  ));
};
export default GetButtonNames;
