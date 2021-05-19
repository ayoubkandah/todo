import { useEffect , useContext} from 'react';
import {ListContext} from "../context/data";
import axios from "axios";
import {LoggedContext} from "../context/data";
const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const useAjax = ( method) => {
    const LogData=useContext(LoggedContext)
const datalist=useContext(ListContext)
// const [trigger,setTrigger]=useState(false)
    useEffect(() => {
        if (method === "get") {

            axios({
                method: method,
                url: todoAPI,
            }).then(data => {
                let allPost=data.data.results.length

                datalist.setList(data.data.results)
                // setData(data.data.results)
                // cb(data);
                    })
        }


    },[])


    function Post(item) {
        if (method === "post") {
            console.log("post")
            axios({
                method: 'post',
                url: todoAPI,
                data: item
            })
                .then(savedItem => {
                    datalist.setList([...datalist.list, savedItem.data])
// console.log(datalist.list)
                    // cb(savedItem)
                })
                .catch(console.error);
        }

    }
//
    function complete(id) {
        let arr=LogData.user.capabilities
        if (method === "put"&&arr.includes("update")) {

            let item = datalist.list.filter(i => i._id === id)[0] || {};
            console.log(item)
            if (item._id) {

                item.complete = !item.complete;

                let url = `${todoAPI}/${id}`;

                axios({
                        method: 'put',
                        url: url,
                        data: item
                    }
                ).then(savedItem => {
                    datalist.setList(datalist.list.map(listItem => listItem._id === item._id ? savedItem.data: listItem));

                    // cb(savedItem, item)
                })

            }

        }

    }
//
    function Delete(id) {
        let item = datalist.list.filter(i => i._id === id)[0] || {};
        console.log(item)
        if (item._id) {

            item.complete = !item.complete;

            let url = `${todoAPI}/${id}`;

            axios({
                    method: 'delete',
                    url: url,
                }
            ).then(()=>{
                let Arr=datalist.list.filter((ele,ind)=>{
                    if(id===ele._id){
                        return false
                    }else{return(ele)}
                })
                datalist.setList(Arr)

            })



        }
    }

    function Put(e) {
        e.preventDefault()
        let id = e.target.idInput.value
        let task = e.target.task.value
        let difficulty = e.target.difficulty.value
        let assignee = e.target.assignee.value
        let item = datalist.list.filter(i => i._id === id)[0] || {};
        if (item._id) {
            let url = `${todoAPI}/${id}`;
            axios({
                    method: 'put',
                    url: url,
                    data: {text: task, difficulty: difficulty, assignee: assignee}
                }
            ).then(savedItem => {
                let Arr=datalist.list.map((ele,ind)=>{
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
                datalist.setList(Arr)
                // cb(id, task, difficulty, assignee)
            })

        }
// console.log(task)
    }
//
//     return [Post, complete, Delete, Put]
    return [Post,complete,Delete,Put]

}


export default useAjax;


// console.log(data)


