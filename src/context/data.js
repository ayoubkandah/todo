import React, { useState  } from 'react';
export const ListContext=React.createContext();
export default function DataContext(props){
    const [list, setList] = useState([]);
    const [completeT,setCompleteT]=useState(true)
const [perPage,setperPage]=useState(3)
    const data={list:sort(),setList,completeT,setCompleteT,perPage,setperPage}
function sort(){

    console.log(list[0]?.difficulty)
        if( list.length>0){
//     if(typeof )
            list.sort(function(a, b){return a.difficulty - b.difficulty});

        }
return list
    }
    return(
        <ListContext.Provider  value={data} >
            {props.children}
        </ListContext.Provider >

    )
}