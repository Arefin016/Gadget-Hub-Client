// import { createContext, useEffect, useState } from "react"
// import { app } from "../Firebase/firebase.config"

import { createContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth"
import { app } from "../Firebase/firebase.config"

// export const AuthContext = createContext(null)
// // const auth = getAuth(app)

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const googleProvider = new GoogleAuthProvider()

//   //create user
//   const createUser = (email, password) => {
//     setLoading(true)
//     return createUserWithEmailAndPassword(auth, email, password)
//   }

//   //sign In
//   const signIn = (email, password) => {
//     setLoading(true)
//     return signInWithEmailAndPassword(auth, email, password)
//   }

//   //Google Sign In
//   const googleSignIn = () => {
//     setLoading(true)
//     return signInWithPopup(auth, googleProvider)
//   }

//   //LogOut
//   const logOut = () => {
//     setLoading(true)
//     return signOut(auth)
//   }

//   //Update Profile
//   const updateUserProfile = (name, photo) => {
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photo,
//     })
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser)
//       if (currentUser) {
//         //get token and store client
//         const userInfo = { email: currentUser.email }
//         axiosPublic.post("/jwt", userInfo).then((res) => {
//           if (res.data.token) {
//             localStorage.setItem("access-token", res.data.token)
//             setLoading(false)
//           }
//         })
//       } else {
//         //TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
//         localStorage.removeItem("access-token")
//         setLoading(false)
//       }
//     })
//     return () => {
//       return unsubscribe()
//     }
//   }, [axiosPublic])

//   const authInfo = {
//     user,
//     loading,
//     createUser,
//     signIn,
//     logOut,
//     updateUserProfile,
//     googleSignIn,
//   }

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   )
// }

// export default AuthProvider

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider()

  //create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //login user
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //logOut
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  //update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // google sign in
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log("current user", currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
