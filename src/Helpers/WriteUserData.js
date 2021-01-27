import Firebase from "firebase";

const writeUserData = (workout) => {
  Firebase.database().ref("/").push(workout);
  console.log("DATA SAVED");
};

export default writeUserData;
