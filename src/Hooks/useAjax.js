import { useEffect} from 'react';
import axios from "axios";

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const useAjax = (cb, method, list) => {
// const [trigger,setTrigger]=useState(false)
    useEffect(() => {
        if (method === "get") {

            axios({
                method: method,
                url: todoAPI,
            }).then(data => {
                // setData(data.data.results)
                cb(data);
            })
        }


    })


    function Post(item) {
        if (method === "post") {
            console.log("post")
            axios({
                method: 'post',
                url: todoAPI,
                data: item
            })
                .then(savedItem => {
                    console.log(savedItem)
                    cb(savedItem)
                })
                .catch(console.error);
        }

    }

    function complete(id) {
        if (method === "put") {

            let item = list.filter(i => i._id === id)[0] || {};
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
                    cb(savedItem, item)
                })

            }

        }

    }

    function Delete(id) {
        let item = list.filter(i => i._id === id)[0] || {};
        console.log(item)
        if (item._id) {

            item.complete = !item.complete;

            let url = `${todoAPI}/${id}`;

            axios({
                    method: 'delete',
                    url: url,
                }
            )

            cb(id)


        }
    }

    function Put(e) {
        e.preventDefault()
        let id = e.target.idInput.value
        let task = e.target.task.value
        let difficulty = e.target.difficulty.value
        let assignee = e.target.assignee.value
        let item = list.filter(i => i._id === id)[0] || {};
        if (item._id) {
            let url = `${todoAPI}/${id}`;
            axios({
                    method: 'put',
                    url: url,
                    data: {text: task, difficulty: difficulty, assignee: assignee}
                }
            ).then(savedItem => {
                cb(id, task, difficulty, assignee)
            })

        }
// console.log(task)
    }

    return [Post, complete, Delete, Put]

}


export default useAjax;


// console.log(data)


