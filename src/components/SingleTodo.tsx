import React,{useState,useCallback} from "react";
import {Input} from "./id";
// import ToggleButton from 'react-bootstrap/Button';
import {ToggleButton} from "react-bootstrap";

import { createNote, deleteNote} from '../graphql/mutations';
import { listNotes } from '../graphql/queries';
import { API } from 'aws-amplify';

type Props = {
    input:Input,
    items: Input[],
    setItems: React.Dispatch<React.SetStateAction<Input[]>>,
    fetchNotes :  () => Promise<void>
}

const SingleTodo = ({input,items, setItems, fetchNotes}:Props) => {

    const[edit, setEdit] = useState<boolean>(false)
    const[editInput, setEditInput] =  useState<string>(input.input)

    // const handleDelete = (id:number) => {
    //     setItems(items.filter((input)=>input.id!==id))
    // }
    const [ notes, setNotes ] = useState([])

    // const fetchNotes = useCallback(async () => {
    //     const result = await API.graphql({
    //         query: listNotes,
    //         authMode: 'AMAZON_COGNITO_USER_POOLS'
    //     })
    //     // @ts-ignore
    //     setNotes(result.data.listNotes.items)
    // }, [setItems])

    const handleEdit=(e:React.FormEvent, id:number)=>{
        e.preventDefault()

        setItems(items.map((input) =>(
            input.id==id?{...input,input:editInput}:input
        )))
        setEdit(false)
    }

    const handleDelete = useCallback(async (id:number) => {
        await API.graphql({
            query: deleteNote,
            variables: { input: { id: id } },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        })
        fetchNotes()
    }, [fetchNotes])
    return(
        <form onSubmit={(e) => handleEdit(e,input.id)}>
            {
                edit?(
                    <input value={editInput}  onChange={(e) =>setEditInput(e.target.value)}/>
                ):(
                    <div>
                    <label className="textTask">{input.input}</label>
                    <ToggleButton className="showTask"  variant="outline-info" value='' onClick={()=>{
                        if(!edit){
                            setEdit(!edit)
                            }
                    }}>Edit</ToggleButton>
                        <ToggleButton variant="outline-danger" className="showTask" value='' onClick={() => handleDelete(input.id)}>Delete</ToggleButton>
                    </div>
                )
            }



        </form>
    )
}

export default SingleTodo