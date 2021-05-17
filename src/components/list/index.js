import React from 'react';
import { ButtonGroup,Button,Jumbotron} from 'react-bootstrap';

function ToDoList(props){

function toggleVis(id){

    for (let x=0; x<props.list.length;x++){
        if(id===props.list[x]._id){
            if(document.getElementById(id).style.display === "block"){
                document.getElementById(id).style.display = "none";
            }else{
                document.getElementById(id).style.display = "block";

            }
        }else{
    document.getElementById(`${props.list[x]._id}`).style.display = "none";
    }
    }
}

    return (
      <ul>
        {props.list.map(item => (
          <li
            className={`complete-${item.complete}`}
            key={item._id}
          >
            <Jumbotron   key={item._id}>
<h4 onClick={()=>props.handleComplete(item._id)}>  {item.text}</h4>

                <h6 onClick={()=>props.handleComplete(item._id)}>
              difficulty:- {item.difficulty} , assignee:- {item.assignee}
            </h6>
                <h6 onClick={()=>props.handleComplete(item._id)}>{item.time}</h6>
            <ButtonGroup>
              <Button variant="outline-danger" onClick={()=> props.delete(item._id)}>Delete</Button>
              <Button variant="outline-info" onClick={()=>toggleVis(item._id)}>Edit</Button>
                </ButtonGroup>
                <form className="edit null" id={item._id} onSubmit={props.edit}>
                    <input type="number" defaultValue={item._id} id="idInput" hidden />
                    <input type="text" name="task" defaultValue={item.text} id=""/>
                    <input defaultValue={item.difficulty}type="range" min="1" max="5" name="difficulty"/>
                    <input type="text" name="assignee" defaultValue={item.assignee} id=""/>
                <input type="submit" value="Save" id=""/>
                </form>

                </Jumbotron>
          </li>
        ))}
      </ul>
    );

}

export default ToDoList;
