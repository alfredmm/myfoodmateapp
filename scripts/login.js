// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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

// Handle login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Input fields
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("Logged in successfully!");
                window.location.href = 'useraccount.html';
                // You can redirect the user or update the UI here
                // For example: window.location.href = "dashboard.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Login failed: " + errorMessage);
                // Handle errors here
            });
    });
});