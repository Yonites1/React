import{useState} from 'react'
import Add from "./Add"
import List from "./List"
function ToDoList(){
    const [items, setItems] = useState([]);
   
    function handleAdd(task){
        console.log(task);
        setItems(
         [...items
            ,
            {
                id: items.length+1, 
                name: task,
                done: false
            }
         ]

        );

    }
function handleDelete(name){
    setItems(items.filter(item=>item.name!==name));
}

function handleCheck(id){
    console.log(id, "handle check in ToDoList")
    setItems(items.map(item=>{
        if (item.id===id){
            item.done = true;
        }
        return item;
    }));
}

    return(
        <>  
        <Add handleAdd={handleAdd}/>
        <List items={items} onDelete={handleDelete} onCheck={handleCheck}/>
        </>

    )
}

export default ToDoList;