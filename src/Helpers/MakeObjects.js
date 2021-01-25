const MakeObjects = (workoutPlan) => {
  let objArr = [];
  workoutPlan.map((item) => {
    let words = item.split(" ");
    let indexOfFor = item.indexOf(" for ");
    let indexOfReps = item.indexOf(" rep(s) ");
    let name = "";
    let reps = "";
    for (let i = 0; i < indexOfFor; i++) {
      name = name + words[i];
    }
    for (let i = indexOfFor + 1; i < indexOfReps; i++) {
      reps = reps + words[i];
    }
    let obj = {
      name: name,
      reps: reps,
    };
    objArr.push(obj);
  });
  console.log(objArr);
  return objArr;
};

export default MakeObjects;
