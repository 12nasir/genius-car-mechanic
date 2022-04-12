import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () =>{
    const [user, setUsers]  = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUsers(result.user)
        })
        .finally(() => setIsLoading(false));

    }

    // Observe user state change
    useEffect( () =>{
     const unSubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
            setIsLoading(false)
        })
        return ()=> unSubscribed;
    } ,[])

    const logout = () =>{
        setIsLoading(true)
        signOut(auth)
        .then( () => { })
        .finally(()=> setIsLoading(false));
    }

    return{
        user, 
        isLoading,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;