import {useEffect, createContext, useState} from "react";
// import {LoggedContext} from "../../context/data";
import coockie from "react-cookies"
import dotEnv from "dotenv"
import jwt from "jsonwebtoken"
import superAgent from "superagent"
const url = "https://api-js401.herokuapp.com"
const secret="ak"
dotEnv.config()
export const AuthContext=createContext()
export default function Auth (props){
    const [loginF,setLogin]=useState()
    const [validF,setValidF]=useState()
    const functions={loginF:login,validF:validation}
// let LogData=useContext(LoggedContext)

// useEffect(()=>{
//     setLogin(login())
//     setLogout(logout())
//
// const token = coockie.load("auth")
//   // console.log(token)
//     // validation(token)
//
// },[])
//
    async function login (userName,password){
        try{
            // console.log()
            // let user="user"
            // // userName=
            // let pass="USER"
            const response= await superAgent.post(`${url}/signin`).set(`authorization`,`Basic ${btoa(`${userName}:${password}`)}`)
            // console.log(response.body.token)
          return  {valid:validation(response.body.token),token:response.body.token}
        }catch (error){
return {valid:false}
        }

    }

   async function validation(token){
        // console.log("validdddddddd")
    // let token1="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGNkZDMzYWNhYzc5MDAxN2ZjMjZkNiIsImNhcGFiaWxpdGllcyI6WyJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjIxNDE2OTMwLCJleHAiOjE2MjE0MjA1MzB9.ec_lGR7NKS-iiPsYkR9eksyA08Zlo1duaXQPi7CIXMY"
    const user = jwt.decode(token)
    if (user === null) {
        return false
    } else {
        return {valid:true,user:user}
    }

    // LogData.setLoggedIn(true)
    // LogData.setUser(user)
    // coockie.save("auth",token)

    // console.log(LogData.loggedIn)


    // LogData.setLoggedIn(false)

    }
    return(
        <AuthContext.Provider value={functions}>
            {props.children}
        </AuthContext.Provider>

    )

}
