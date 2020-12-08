import React, { useState, useEffect } from "react"
import { firebaseAuth } from "services/firebase-service"

const useFirebaseAuthentication = () => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const unlisten = firebaseAuth.onAuthStateChanged((user) => {
      user ? setAuthUser(user) : setAuthUser(null)
    })

    return () => unlisten()
  })

  return authUser
}

export default useFirebaseAuthentication
