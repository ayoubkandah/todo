import React,{useContext,useState,useEffect}from 'react';
import { ButtonGroup,Button,Jumbotron} from 'react-bootstrap';
import {ListContext} from "../../context/data";
function ToDoList(props) {
    const toggleC = useContext(ListContext)
    let allpage,currentPage,allpost,limitpost,startpost;
// console.log(props,"ddddddd")
   const [page,setPage]=useState(1)

    let list= toggleC.list
    if(!toggleC.completeT){
        list =list.filter((ele)=>{
            if(ele.complete){
                return false
            }else{
                return true
            }
        })
    }

// console.log(list)
    let numberofslice =toggleC.perPage
    currentPage=page
    allpost=list.length
    allpage= allpost/numberofslice
    let allpages;
    if(Number.isInteger(allpage)){
        allpages=allpage
    }else{
        allpages=parseInt(allpage) +1
    }


    console.log(page,allpages)
    limitpost=page*numberofslice
   startpost=limitpost-numberofslice
// 0-3 ,3-6,6-9

    // console.log(allpost)
    // console.log(allpages)
    let numberOfPage=[]

    for(let x=1;x<=allpages;x++){
     if (page===x){
         numberOfPage.push(<p key={x} onClick={numberPage} id="activeN" className="numberOfPage">{x}</p>)

     }else{
         numberOfPage.push(<p key={x} onClick={numberPage} id={x} className="numberOfPage">{x}</p>)

     }

    }

        // console.log(numberOfPage)
    function nextPage(){
        if(page<allpages){
setPage(page+1)
        }

   }
function numberPage(e){

        // console.log(e.target.innerHTML)
 let numPage=parseInt( e.target.innerHTML)
    setPage(numPage)
}
    function prevPage() {
        if (page > 1) {
            setPage(page - 1)

        }

    }
    function ToggleVis(id) {
        console.log(id)
        for (let x = startpost; x < limitpost; x++) {
            if (id === props.list[x]._id) {
                if (document.getElementById(id).style.display === "block") {
                    document.getElementById(id).style.display = "none";
                } else {
                    document.getElementById(id).style.display = "block";
                }
            } else {
                document.getElementById(`${list[x]._id}`).style.display = "none";
            }
        }

    }
    // useEffect(()=>{
    //     let trigger=false
    //     if(trigger){
    //     document.getElementById(page).textContent="dd"
    // console.log("moount")
    //     }else{
    //         trigger=true
    //     }
    // },[page])

    return (
        <>
        <ul>
            {list.slice(startpost,limitpost).map(item => (

                <li key={item._id}>

                            <Jumbotron key={item._id}>
                                {item.complete ? <>
                                    <p id="complete">Complete</p>
                                </> : <> <p id="pending">Pending</p> </>}


                                <p id="ass" onClick={() => props.handleComplete(item._id)}>
                                    {item.assignee}
                                </p>
                                <br/>
                                <p id="text" onClick={() => props.handleComplete(item._id)}>  {item.text}</p>

                                <p id="dif"> difficulty {item.difficulty} </p>
                                <p onClick={() => props.handleComplete(item._id)}>{item.time}</p>
                                <ButtonGroup>
                                    <Button variant="outline-danger" onClick={() => props.delete(item._id)}>Delete</Button>
                                    <Button variant="outline-info" onClick={() => ToggleVis(item._id)}>Edit</Button>
                                </ButtonGroup>
                                <form className="edit null" id={item._id} onSubmit={props.edit}>
                                    <input type="hidden" defaultValue={item._id} id="idInput"/>
                                    <input type="text" name="task" defaultValue={item.text} id=""/>
                                    <input defaultValue={item.difficulty} type="range" min="1" max="5" name="difficulty"/>
                                    <input type="text" name="assignee" defaultValue={item.assignee} id=""/>
                                    <input type="submit" value="Save" id=""/>
                                </form>

                            </Jumbotron>



                </li>
            ))}

        </ul>
            <Button variant="outline-info" id="next-prev" onClick={prevPage}>Prev</Button>
            <div id="numbers">
                {numberOfPage}
            </div>
            <Button variant="outline-info" id="next-prev"  onClick={nextPage}>Next</Button></>
    );

}

export default ToDoList;
