import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createNewUser = (name, email) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, name, email)
    }

    const userLogin = (email, password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
            setLoading(true);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const updateUserProfile = (updatedData) =>{
       return updateProfile(auth.currentUser, updatedData)
    }

    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
              setLoading(false);
        })

        return() => {
            unSubscribe
        }
    }, [])


    const authUser = {
      user,
      setUser,
      createNewUser,
      logOut,
      userLogin,
      loading,
      updateUserProfile,
    };

    return <AuthContext.Provider value={authUser}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;