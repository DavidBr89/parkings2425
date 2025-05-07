import AsyncStorage from "@react-native-async-storage/async-storage";
import {initializeApp} from "firebase/app";
import {initializeAuth, getReactNativePersistence, getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBX8KFWJbxg0VB6e1mx4TBMmNA9l8f7hj8",
  authDomain: "hogent-parkings-a0186.firebaseapp.com",
  projectId: "hogent-parkings-a0186",
  storageBucket: "hogent-parkings-a0186.firebasestorage.app",
  messagingSenderId: "6320476371",
  appId: "1:6320476371:web:bac9ca5e880152b6e50426"
};

export const app = initializeApp(firebaseConfig);

initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const auth = getAuth(app);
export const db = getFirestore(app);


