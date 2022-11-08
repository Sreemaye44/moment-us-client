import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../../Firebase/firebase.config";


export const AuthContext=createContext();
const auth=getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading]=useState(true);


    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const login=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    }

    const providerLogin=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logout=()=>{
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{return unsubscribe()}
    },[])

    const authInfo={
        user,
        loading,
        createUser, 
        login,
        providerLogin,
        logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;