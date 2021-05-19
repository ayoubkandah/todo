import {useContext,useEffect} from "react";
import {Form,Col,Button} from "react-bootstrap"

import coockie from "react-cookies"
import {If,Else,Then} from "react-if"
import {AuthContext} from "../auth";
import {LoggedContext} from "../../context/data";
export default function LoginForm(){
    let LogData=useContext(LoggedContext)

    const Auth =useContext(AuthContext)

useEffect(()=>{
const token = coockie.load("auth")
  // console.log(token)
    d()
    async function d(){
  let e =  await Auth.validF(token)
        if(e){
            LogData.setUser(e.user)
            LogData.setLoggedIn(true)
        }
}
},[])


    function handleSub(e) {
        e.preventDefault()
        let username=e.target.username.value
        let password=e.target.password.value
        login()
        async function login(){

            let result = await Auth.loginF(username,password)
           let validation= await result.valid

            if(validation.valid){
            coockie.save("auth",result.token)
                LogData.setUser(validation.user)
                LogData.setLoggedIn(true)

            }else {alert("Wrong Username/Password")}
        }
    }

    return(
   <If condition={LogData.loggedIn}>
       <Then>
           {null}
       </Then>
       <Else>
           <Form id="formL" onSubmit={handleSub}>
               <Form.Control   placeholder="username"   type="text " name="username"/>
               <Form.Control  placeholder="password"  type="password" name="password" />
               <Button type="submit">Login </Button>
           </Form>
       </Else>
       </If>

    )
}

