import DropDownNav from "./Components/DropdownNav";
import createRoutes from "./Helpers/FetchRoutes";
function App() {
  const routes = createRoutes();
  return (
    <div>
      <DropDownNav />
      {routes}
    </div>
  );
}

export default App;
