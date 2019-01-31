import { initializeApp } from 'firebase';

const app = initializeApp ({
	
    apiKey: "AIzaSyD4hSVhwlbGrCTD3LCmHRVtJqvuD01y6vA",
    authDomain: "test-3e1f4.firebaseapp.com",
    databaseURL: "https://test-3e1f4.firebaseio.com",
    projectId: "test-3e1f4",
    storageBucket: "",
    messagingSenderId: "1043304378477"
  });
  
  export const db = app.database();
  export const whiskyRef = db.ref('whiskys');