import React, { useEffect, useState } from 'react';
import TodoForm from '../form';
import TodoList from '../list';
import axios from "axios"

import useAjax from "../../Hooks/useAjax";
import '../todo/todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {

const getData=useAjax(_getTodoItems,"get")
  const [Post]=useAjax(_addItem,"post")
  const [list, setList] = useState([]);
  const [eed,complete]=useAjax(_toggleComplete,"put",list)
  const [dd,ee,Delete]=useAjax(DeleteItem,"delete",list)
  const [ddd,eeee,d,Put]=useAjax(EditItem,"delete",list)

  function _addItem  (data)  {

    setList([...list, data.data])

  };

  function _toggleComplete ( data,item) {
console.log(data)

          setList(list.map(listItem => listItem._id === item._id ? data.data: listItem));

  };
  function  EditItem(id,task,difficulty,assignee) {

    let Arr=list.map((ele,ind)=>{
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
  function _getTodoItems (data){
    setList(data.data.results)
      // .catch(console.error);
  }
  function DeleteItem(id) {
    let Arr=list.filter((ele,ind)=>{
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
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={Post} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={complete}
            delete={Delete}
            edit={Put}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
