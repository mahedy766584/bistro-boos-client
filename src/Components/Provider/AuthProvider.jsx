/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const axiosSecure = useAxiosPublic();

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setIsLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        setIsLoading(true)
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user ----->', currentUser);
            if (currentUser) {
                //get token and store client
                const emailInfo = { email: currentUser.email };
                axiosSecure.post('/jwt', emailInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            // console.log('token finded', res.data.token);
                            setIsLoading(false)
                        }
                    })

            } else {
                // remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token')
                setIsLoading(false)
            }
            // setIsLoading(false)
        });
        return () => {
            return unsubscribe;
        }
    }, [axiosSecure])

    const authInfo = {
        user,
        isLoading,
        createUser,
        googleLogin,
        loginUser,
        logOut,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;