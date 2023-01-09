const firebaseConfig = {
    apiKey: "AIzaSyAyg5gWCUEPsY-DavvTo1GNYKShdsTMESI",
    authDomain: "bugni-e1aa1.firebaseapp.com",
    databaseURL: "https://bugni-e1aa1-default-rtdb.firebaseio.com",
    projectId: "bugni-e1aa1",
    storageBucket: "bugni-e1aa1.appspot.com",
    messagingSenderId: "515835635480",
    appId: "1:515835635480:web:adeea3bd94e014d429206d"
  };


//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("emailData");

//Get Submit Form
let submitButton = document.getElementById("submit_button");

//Create Event Listener To Allow Form Submission
if (submitButton){
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let emailname = document.getElementById("email_input").value;

  firestore
    .collection("emailData")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().email_input;
        if (emailname === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      email_input: emailname
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
//   function clearForm() {
//     document.getElementById("clearFrom").reset();
//   }
//   clearForm()
});
};