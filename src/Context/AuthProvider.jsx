import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [productRefetch,setProductRefetch] = useState()
    const [loading,setLoading] = useState(true)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    // create user account 
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user signin
    const userSignIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // update user profile 
    const updateUserProfile=(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }

    // google signin
    const signInGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }


    // logout
    const logOut=()=>{
        localStorage.removeItem('furniture-token')
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log(currentUser, 'user there');
              // get and set token
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])


    const value={
        user,
        loading,
        setLoading,
        signInGoogle,
        createUser,
        userSignIn,
        updateUserProfile,
        logOut,
        productRefetch,setProductRefetch
    }
    return (
        <div>
            <AuthContext.Provider value = {value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;