import Firebase from "firebase";

const getUserData = (dataIsFetched) => {
  let data = "";
  let ref = Firebase.database().ref("/");
  ref.on("value", (snapshot) => {
    data = snapshot.val();

    console.log("DATA RETRIEVED");
    dataIsFetched(true);
  });
  return data;
};

export default getUserData;
