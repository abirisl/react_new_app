import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { app } from "../firebase/Firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider= ({children}) =>{
    const[user,setUser] = useState(null)
    const[loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        return signOut(auth).then(()=>setUser(null))
    }

     const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
     };


     useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
                console.log(currentUser)
            }else{
                setLoading(false)
            }
        });
        return () =>{
            return unSubscribe();
        }            
     },[])


     const authInfo = {user, googleLogin,createUser,signIn,logOut,loading}
     return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
     )
}
export default AuthProvider;