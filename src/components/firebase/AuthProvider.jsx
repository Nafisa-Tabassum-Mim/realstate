import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase.config";
import { createContext } from "react";


export const AuthContext = createContext(null)
const auth = getAuth(app)


const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const authInfo = {
    createUser
}

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;