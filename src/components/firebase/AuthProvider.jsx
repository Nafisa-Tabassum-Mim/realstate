import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]= useState(true)


    // create id / signUp
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login id 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // check if the user is there or not 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('user in the auth state changed', user)
            setUser(user)
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;