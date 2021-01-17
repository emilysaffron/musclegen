import Button from "../Components/Buttons";

const GetButtonNames = (labels, onClick) => {
  let buttons = [];

  for (let i = 0; i < labels.length; i++) {
    buttons.push(<Button label={labels[i]} onClick={onClick} />);
  }

  return buttons;
};

export default GetButtonNames;
