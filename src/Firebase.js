// Import the Firebase SDK and initialize Firebase with your project configuration
import firebase from 'firebase/app';
import 'firebase/database';

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  databaseURL: 'https://my-portfolio-27444-default-rtdb.firebaseio.com',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to save user information to the database
const saveUserInfo = (userEmail, userName, subject, message) => {
  // Get a reference to the database
  const database = firebase.database();

  // Create a new unique key for the user entry
  const userKey = database.ref().child('users').push().key;

  // Create a data object with user information
  const userData = {
    email: userEmail,
    name: userName,
    subject: subject,
    message: message,
  };

  // Define the update object
  const updates = {};
  updates['/users/' + userKey] = userData;

  // Update the database with the user information
  return database.ref().update(updates);
};

// Example usage
const userEmail = 'user@example.com';
const userName = 'John Doe';
const subject = 'Portfolio Inquiry';
const message = 'I love your work!';

// Call the function to save user information to the database
saveUserInfo(userEmail, userName, subject, message)
  .then(() => {
    console.log('User information saved successfully.');
  })
  .catch((error) => {
    console.error('Error saving user information:', error);
  });
