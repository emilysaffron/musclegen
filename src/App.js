import { useState } from "react";
import DropDownNav from "./Components/DropdownNav";
// Careful of separating default export names and file names. These should match
import createRoutes from "./Helpers/FetchRoutes";
import { CurrentPlanContext } from "./Helpers/CurrentPlanContext";
import firebaseConfig from "./firebaseConfig";
import Firebase from "firebase";
function App() {
  if (!Firebase.apps.length) {
    // Initialising this in a component that doesn't have state changes (and therefore doesn't re-render) will allow you to call this without needing the condition
    Firebase.initializeApp(firebaseConfig);
  }

  const [currentPlan, setCurrentPlan] = useState(null);
  // Does this state need to exist at this level? Or can the DropdownNav be responsible for this logic?
  const [navState, toggleNavState] = useState(false);

  return (
    // <div></div> can be replaced with a React fragment: <></>
    <div>
      <DropDownNav navState={navState} toggleNavState={toggleNavState} />
      <CurrentPlanContext.Provider
        // assigning an object key to a value variable with the same name can be shortened to just the value name,
        // i.e. { currentPlan: currentPlan } becomes just { currentPlan }
        value={{ currentPlan: currentPlan, setCurrentPlan: setCurrentPlan }}
      >
        {createRoutes()}
      </CurrentPlanContext.Provider>
    </div>
  );
}

export default App;
