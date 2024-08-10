/* eslint-disable no-undef */
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updatePassword,
    updateProfile,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import app from "../firebase/firebase.config";
  
  export const AuthContext = createContext();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  // eslint-disable-next-line react/prop-types
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // Create a new account
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    // Sign in
    const logIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    // Sign in with google
    const signinWithGmail = () => {
      return signInWithPopup(auth, googleProvider);
    };

    const changePassword = (user, newPassword) => {
      return updatePassword(user, newPassword)
    }
  
    //Sign out
    const SignOUt = () => {
      signOut(auth);
    };
  
    //Update user
    const updateUser = (name, photoURL) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        // console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      });
  
      return () => {
        return unsubscribe();
      };
    }, []);
  
  
  
    const authInfo = {
      user,
      createUser,
      logIn,
      signinWithGmail,
      SignOUt,
      updateUser,
      loading,
      changePassword
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;