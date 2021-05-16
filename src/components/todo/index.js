import {useState , useEffect} from 'react';
import Header from "../Header"
import TodoForm from '../form';
import TodoList from '../list';
import './todo.scss';
function  ToDo() {
  const [List,setList]=useState([])
  function AddItem (item) {
    item._id =  Math.random();
    item.complete = false;
      let date=Date.now()
      let today=new Date(date)
      item.time=today.toUTCString();
      // console.log(item.time)
      setList([...List,item]);
  }
 function ToggleComplete (id) {
    let item = List.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let list = List.map(listItem => listItem._id === item._id ? item : listItem);
        setList(list);
    }
  }
  useEffect(()=>{
      if(List.length>0){
          console.log("update")
      }
  },[List])
    useEffect(()=>{
      let  list = [
            { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
            { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
            { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
            { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
            { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
        ];
        setList(list);
    },[])


    const EditItem=(e)=> {
         e.preventDefault()
        let id=e.target.idInput.value
        let task=e.target.task.value
        let difficulty=e.target.difficulty.value
        let assignee=e.target.assignee.value
        let Arr=List.map((ele,ind)=>{
            if(id===ele._id.toString()){
                ele.text=task
                ele.difficulty=difficulty
                ele.assignee=assignee
                let date=Date.now()
                let today=new Date(date)
                ele.time=today.toUTCString();
                return (ele)
            }else{return(ele)}
        })
        setList(Arr)
    }
    const DeleteItem=(id)=> {
        let Arr=List.filter((ele,ind)=>{
            if(id===ele._id){
               return false
            }else{return(ele)}
        })
        console.log(Arr)
        setList(Arr)
        }
    return (
      <>
        <header>
          <Header />
        </header>
        <section className="todo">
          <div>
              <h4>
                  There are {List.filter(item => !item.complete).length} Items To Complete
              </h4>
            <TodoForm handleSubmit={AddItem} />
          </div>
                  <div>
            <TodoList
              list={List}
              handleComplete={ToggleComplete}
              edit={EditItem}
              delete={DeleteItem}
            />
          </div>
        </section>
      </>
    );
}

export default ToDo;
