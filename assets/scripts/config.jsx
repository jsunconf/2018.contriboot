import firebase from 'firebase/app';
require("firebase/auth");
require("firebase/database");

var config = {
    apiKey: "AIzaSyCowFpjIxJIgGAC-M1Nz-lLWTk_GSwW3_Q",
    authDomain: "contriboot-2018.firebaseapp.com",
    databaseURL: "https://contriboot-2018.firebaseio.com"
 };
firebase.initializeApp(config);

export const CONTRIBUTIONS_DB = 'contributions';
export const INTERESTS_DB= 'interests';
export const VOTES_DB = 'votes';

export default firebase;
