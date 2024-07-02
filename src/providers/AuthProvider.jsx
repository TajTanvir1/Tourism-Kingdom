import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider,  GithubAuthProvider, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import app from "../Firebase/FirebaseConfig";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   // update profile
   const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo
        })
        
  }

   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }

   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   }

   const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   }

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         console.log('user in the auth state changed', currentUser);
         setUser(currentUser);
         setLoading(false)
      })
      return () => {
         unSubscribe();
      }
   }, [])


   const authInfo = {
      user,
      createUser,
      loading,
      logOut,
      signIn,
      googleLogin,
      githubLogin,
      updateUserProfile
      
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;