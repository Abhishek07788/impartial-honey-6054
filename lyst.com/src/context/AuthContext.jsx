import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {
  const [isAuth, setisAuth] = useState(false);
  const [email, setEmail] = useState("")
  const [token, setToken] = useState(null)

  const toggleAuth = () => setisAuth(!isAuth);
  const loginUser = (email,token) =>{
    setEmail(email)
    setToken(token)
    setisAuth(true)
  }
  
  const logOutUser = () =>{
    setEmail("")
    setToken(null)
    setisAuth(false)
  }

  return (
    <AuthContext.Provider value={{isAuth, toggleAuth,logOutUser,loginUser, email, token}}>
        {children}
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;
