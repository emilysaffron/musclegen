/* eslint-disable array-callback-return */
const MakeObjects = (
  workoutPlan,
  updateMaxExerciseNumber,
  updateFilledPlan,
  label
) => {
  let objArr = [];

  workoutPlan.map((item) => {
    let name = "";
    let reps = "";

    let words = item.split(" ");

    let indexOfFor = words.indexOf("for");

    if (indexOfFor > 1) {
      updateFilledPlan(true);
      for (let i = 0; i < indexOfFor; i++) {
        name = name + " " + words[i];
      }

      reps = words[indexOfFor + 1];
      console.log("hi " + label);
      let obj = {
        label: label,
        name: name,
        reps: reps,
      };
      objArr.push(obj);
    }
  });
  updateMaxExerciseNumber(objArr.length);

  return objArr;
};

export default MakeObjects;
