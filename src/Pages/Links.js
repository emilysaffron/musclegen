import Menu from "../Components/Menu";
import clicked from "../Helpers/ButtonClick";
const Links = () => {
  return <Menu labels={["Workouts", "Meals"]} onClick={clicked} />;
};
export default Links;
