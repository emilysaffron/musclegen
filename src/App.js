import { useState } from "react";
import DropDownNav from "./Components/DropdownNav/DropdownNav";
import fetchRoutes from "./Helpers/FetchRoutes";
import { CurrentPlanContext } from "./Helpers/CurrentPlanContext";
import { Global, css } from "@emotion/react";

function App() {
  const [currentPlan, setCurrentPlan] = useState(null);

  return (
    <>
      <Global
        styles={css`
          div,
          button {
            font-family: Palatino, URW Palladio L, serif;
            color: black;
          }
        `}
      />

      <DropDownNav />
      <CurrentPlanContext.Provider value={{ currentPlan, setCurrentPlan }}>
        {fetchRoutes()}
      </CurrentPlanContext.Provider>
    </>
  );
}

export default App;
