import React from 'react';
import { ButtonGroup,Button,Jumbotron} from 'react-bootstrap';

function ToDoList(props){
// console.log(props,"ddddddd")
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
          <li>


            <Jumbotron   key={item._id}>
                {item.complete ? <>
                    <p id="complete">Complete</p>
                </> : <> <p id="pending">Pending</p> </>}


                <p id="ass" onClick={()=>props.handleComplete(item._id)}>
              {item.assignee}
            </p>
                <br/>
                <p id="text" onClick={()=>props.handleComplete(item._id)}>  {item.text}</p>
                <br/>
                <p id="dif"> difficulty {item.difficulty} </p>
                <p onClick={()=>props.handleComplete(item._id)}>{item.time}</p>
            <ButtonGroup>
              <Button variant="outline-danger" onClick={()=> props.delete(item._id)}>Delete</Button>
              <Button variant="outline-info" onClick={()=>toggleVis(item._id)}>Edit</Button>
                </ButtonGroup>
                <form className="edit null" id={item._id} onSubmit={props.edit}>
                    <input type="hidden" defaultValue={item._id} id="idInput"  />
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
