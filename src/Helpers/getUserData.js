import Firebase from "firebase";

const getUserData = () => {
  let ref = Firebase.database().ref("/");
  ref.on("value", (snapshot) => {
    const state = snapshot.val();

    console.log(state);
  });
  console.log("DATA RETRIEVED");
};

export default getUserData;
