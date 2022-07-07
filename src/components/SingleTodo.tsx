import React,{useState} from "react";
import {Input} from "./id";

type Props = {
    input:Input,
    items: Input[],
    setItems: React.Dispatch<React.SetStateAction<Input[]>>
}

const SingleTodo = ({input,items, setItems}:Props) => {

    const[edit, setEdit] = useState<boolean>(false)
    const[editInput, setEditInput] =  useState<string>(input.input)

    const handleDelete = (id:number) => {
        setItems(items.filter((input)=>input.id!==id))
    }

    const handleEdit=(e:React.FormEvent, id:number)=>{
        e.preventDefault()

        setItems(items.map((input) =>(
            input.id==id?{...input,input:editInput}:input
        )))
        setEdit(false)
    }
    return(
        <form onSubmit={(e) => handleEdit(e,input.id)}>
            {
                edit?(
                    <input value={editInput} onChange={(e) =>setEditInput(e.target.value)}/>
                ):(
                    <div>
                    <span>{input.input}</span>
                    <button onClick={()=>{
                        if(!edit){
                            setEdit(!edit)
                            }
                    }}>Edit</button>
                        <button onClick={() => handleDelete(input.id)}>Delete</button>
                    </div>
                )
            }



        </form>
    )
}

export default SingleTodo