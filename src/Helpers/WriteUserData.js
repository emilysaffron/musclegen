import Firebase from "firebase";

const writeUserData = (workout) => {
  Firebase.database().ref("/").push(workout);
};

export default writeUserData;
