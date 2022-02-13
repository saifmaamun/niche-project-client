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
import { useNavigate } from 'react-router-dom';




firebaseAuthentication();

const useFirebase = () => {
    // global
    // const navigate =useNavigate();3
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);



    // google log in
    const googleProvider = new GoogleAuthProvider();

    const googleSignin = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                setUser(result.user)
                console.log(result.user)
                saveUser(result.user.email, result.user.displayName, 'POST');
            })
            .finally(() => {
                
                setIsLoading(false)
            })
    }
 

    const saveLoginUser = (email, displayName, method) => {
        const loggedUser = { email, displayName };
        fetch('https://frozen-meadow-47661.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loggedUser)
        })
            .then()
    }





    // new user
    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
        console.log(user)
    }


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://frozen-meadow-47661.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }





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


    //    making admin
    useEffect(() => {
        fetch(`https://frozen-meadow-47661.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])






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
        registerUser,
        logOut,
        userLogin,
        error,
        admin
    }

};

export default useFirebase;
