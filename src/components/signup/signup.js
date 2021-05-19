import {useContext} from "react";
import {Button, Form} from "react-bootstrap";
import superagent from "superagent"
import coockie from "react-cookies"
import {LoggedContext} from "../../context/data";
import {AuthContext} from "../auth";

const url = "https://api-js401.herokuapp.com"
export default  function Signup() {
    const AuthL=useContext(AuthContext)
   const LogData=useContext(LoggedContext)
    async function handleSub(e){
        e.preventDefault()
       try{
     let username=  e.target.username.value
     let password=  e.target.password.value
       let role=e.target.role.value
       // console.log(role)
       let data={username:username,password:password,role}
        let response=await superagent.post(`${url}/signup`).send(data)
           let validation=await AuthL.validF(response.body.token)

           // let validation= await response.valid
           LogData.setUser(validation.user)
// console.log(validation)
           coockie.save("auth",response.body.token)
           LogData.setLoggedIn(true)
       }catch(error){
        alert("wrong inputs")
       }

    }
    return(
        <>
        <Form id="formL" onSubmit={handleSub}>
            <Form.Control   placeholder="username"   type="text " name="username"/>
            <Form.Control  placeholder="password"  type="password" name="password" />
            <Form.Control as="select"  name="role" >
            <option value="user"  >user</option>
            <option value="editor" >Editor</option>
            <option value="admin">Admin</option>
                </Form.Control>
            <Button  type="submit">Signup </Button>
            </Form>
        </>
    )
       }