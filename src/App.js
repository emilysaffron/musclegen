import { useState } from "react";
import DropDownNav from "./Components/DropdownNav";
import fetchRoutes from "./Helpers/FetchRoutes";
import { CurrentPlanContext } from "./Helpers/CurrentPlanContext";
import firebaseConfig from "./firebaseConfig";
import Firebase from "firebase";
import styled from "@emotion/styled";


function App() {
  if (!Firebase.apps.length) {
    // Initialising this in a component that doesn't have state changes (and therefore doesn't re-render) will allow you to call this without needing the condition
    Firebase.initializeApp(firebaseConfig);
  }

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
