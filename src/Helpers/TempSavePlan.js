import MakeObjects from "./MakeObjects";
const TempSavePlan = (workoutPlan) => {
  console.log("HERE");
  let currentPlan = require("../Data/currentPlan.json");
  var fs = require("browserify-fs");
  const plan = MakeObjects(workoutPlan);
  fs.writeFile(currentPlan, plan);
};

export default TempSavePlan;
