import { useContext, useState } from "react"
import { arrContext } from "./App"

function AddTodo()
{

    const {arrActivity,setArrActivity} = useContext(arrContext)

    const [evalue,setEValue] = useState("")

    function handleevalue(evt)
    {
        setEValue(evt.target.value)
    }

    function handleclick()
    {
        var temparr = [...arrActivity,{id:arrActivity.length+1,activity:evalue}]

        setArrActivity(temparr)
    }

    return(
        <>
        <input type="text" value={evalue} onChange={handleevalue} placeholder="Enter the value..."/>
        <button onClick={handleclick}>Add</button>
        </>
    )
}

export default AddTodo