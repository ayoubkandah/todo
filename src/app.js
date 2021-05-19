import React,{useContext} from 'react';
import {If,Else,Then} from "react-if"
import {LoggedContext} from "./context/data";
import LoginForm from "./components/loggin";
import Index from './components/todo-connected';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/signup/signup";
 function  App () {
const LogData=useContext(LoggedContext)
    return (
      <>
        <If condition={LogData.loggedIn}>
            <Then>
        <Index />

            </Then>
<Else>
    <Signup/>

            <LoginForm/>
</Else>
        </If>

      </>
    );

}

export  default  App