import express from "express";
import routes from "./routes";

const app = express();
const PORT = 8000;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHWMi9mw-QVFylLavnItjqF2nvPqzfp8E",
  authDomain: "notion-service.firebaseapp.com",
  projectId: "notion-service",
  storageBucket: "notion-service.appspot.com",
  messagingSenderId: "242522295447",
  appId: "1:242522295447:web:2bb8e7cdcdb3d507e8add2"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

/**
 * Programatically create all routes
 */
Object.keys(routes).forEach((key) => {
  const route = routes[key];
  switch (route.type) {
    case "get": {
      app.get(route.path, route.callback);
      break;
    }
    case "post": {
      app.post(route.path, route.callback);
      break;
    }
    default: {
      throw Error(`Type: ${route.type} is not a valid route type`);
    }
  }
});

app.listen(PORT, () => {
  console.log(`⚡️ [server]: Server is running at https://localhost:${PORT}`);
});