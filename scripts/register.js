// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBohNPzNkiMpprOKf4PJg24Ke-gMmvdsWI",
    authDomain: "food-delivery-app-95261.firebaseapp.com",
    projectId: "food-delivery-app-95261",
    storageBucket: "food-delivery-app-95261.appspot.com",
    messagingSenderId: "348909808370",
    appId: "1:348909808370:web:6cb2b9c328444c0b8abe6b",
    //measurementId: "G-X3G113QKTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Submit signup
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Input fields
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                alert("Account created successfully!");
                // You can redirect the user or update the UI here
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // Handle errors here
            });
    });
});