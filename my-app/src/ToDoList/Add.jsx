import { useState } from "react";

function Add ({handleAdd}){
// React hooks: useState, useEffect, useCallback, useMemo, useReduce
const [task, setTask] = useState("");
function handleChange(event){
    console.log(event.target.name);
    setTask(event.target.value);//"" changes the empty qoatation to sport.   
}
function handleClick(event){
    handleAdd(task);
}
// onChange, onClick, onSubmit, onBlur
    return (
        <>
        <input type="text" name="taskName" onChange={handleChange}/>
        <button onClick={handleClick} disabled={!task}> add Task </button>
        </>
    )
}

export default Add;