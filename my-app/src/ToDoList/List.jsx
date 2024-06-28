function List ({items, onDelete, onCheck}){
    
    function handleDelete(name){
        onDelete(name);
    }

    function handleCheck(id){ 
        console.log(id, "Id Inside handlecheck")
        onCheck(id);
    }

   
    return (
        <ul>
            {
            items.map((item,index)=>{
                return <li key={index} style={{textDecorationLine: item.done ? "line-through":"none"}}> <input type="checkbox" onChange={()=>handleCheck(item.id)}/>{item.name} <button onClick={()=>handleDelete(item.name)}> Delete </button></li>
            })
            }
        </ul>
    )
    

}

export default List;