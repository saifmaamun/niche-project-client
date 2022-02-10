import React, { useEffect, useState } from 'react';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    signInWithEmailAndPassword 
} from "firebase/auth";
import firebaseAuthentication from '../Firebase/firebase.init';




firebaseAuthentication();

const useFirebase = () => {
    // global
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    


    // google log in
    const googleProvider = new GoogleAuthProvider();

    const googleSignin = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
               
                setUser(result.user)
            })
        .finally(() => setIsLoading(false))
    }


    // new user

    // const registerUser = (email, password) => {
        
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((result) => {
    //         const user = result.user;
    //         console.log(user);
    //         setError('');
    //         // setUserName();
    //     })
    //     .catch((error) => {
    //         setError(error.message)
    //     });
    // }

    // // const setUserName = () => {
    // //     updateProfile(auth.currentUser, { displayName: userName })
    // //         .then(result => { })
    // // }



    // user login
    const userLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            });
}




    // logout

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        });

        return () => unsubscribed;
    }, [])
















    return {
        googleLogin: googleSignin,
        user,
        auth,
        // registerUser,
        logOut,
        userLogin,
        error
    } 

};

export default useFirebase;
