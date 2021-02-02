import { useState } from "react";
import DropDownNav from "./Components/DropdownNav";
import fetchRoutes from "./Helpers/FetchRoutes";
import { CurrentPlanContext } from "./Helpers/CurrentPlanContext";

function App() {
  const [currentPlan, setCurrentPlan] = useState(null);

  return (
    <>
      <DropDownNav />
      <CurrentPlanContext.Provider value={{ currentPlan, setCurrentPlan }}>
        {fetchRoutes()}
      </CurrentPlanContext.Provider>
    </>
  );
}

export default App;
