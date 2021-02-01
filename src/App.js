import { useState } from "react";
import DropDownNav from "./Components/DropdownNav";
import createRoutes from "./Helpers/FetchRoutes";
import { CurrentPlanContext } from "./Helpers/CurrentPlanContext";
import firebaseConfig from "./firebaseConfig";
import Firebase from "firebase";
function App() {
  if (!Firebase.apps.length) {
    Firebase.initializeApp(firebaseConfig);
  }

  const [currentPlan, setCurrentPlan] = useState(null);
  const [navState, toggleNavState] = useState(false);

  return (
    <div>
      <DropDownNav navState={navState} toggleNavState={toggleNavState} />
      <CurrentPlanContext.Provider
        value={{ currentPlan: currentPlan, setCurrentPlan: setCurrentPlan }}
      >
        {createRoutes()}
      </CurrentPlanContext.Provider>
    </div>
  );
}

export default App;
