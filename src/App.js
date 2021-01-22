import DropDownNav from "./Components/DropdownNav";
import createRoutes from "./Helpers/FetchRoutes";

function App() {
  return (
    <div>
      <DropDownNav />
      {createRoutes()}
    </div>
  );
}

export default App;
