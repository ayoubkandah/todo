import React, { useEffect, useState  ,useContext} from 'react';
import TodoForm from '../form';
import TodoList from '../list';
import {ListContext} from "../../context/data";

import useAjax from "../../Hooks/useAjax";
import '../todo/todo.scss';
function ToDo(props) {
  /* eslint-disable no-alert */
const datalist=useContext(ListContext)
  // datalist.setList1("dd")
  console.log(datalist.list1)
const getData=useAjax("get")
  const [Post]=useAjax("post")
  // const [list, setList] = useState([]);
  const [eed,complete]=useAjax("put")
  const [dd,ee,Delete]=useAjax("delete")
  const [ddd,eeee,d,Put]=useAjax(EditItem,"delete")


  function  EditItem(id,task,difficulty,assignee) {


  }
  function _getTodoItems (data){

    datalist. setList(data.data.results)
      // .catch(console.error);
  }



  return (
    <>
      <header>
        <h2>
          There are {datalist.list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={Post} />
        </div>

        <div>
          <TodoList
            list={datalist.list}
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
