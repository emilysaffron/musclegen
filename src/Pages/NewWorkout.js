import Menu from "../Components/Menu";
import clicked from "../Helpers/ButtonClick";
const NewWorkout = () => {
  return <Menu labels={["Upper Body", "Lower Body"]} onClick={clicked} />;
};
export default NewWorkout;
