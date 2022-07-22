import React from "react";
import './style.css';
import Button from 'react-bootstrap/Button';

interface Props{
    input:string
    setInput: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({input, setInput, handleAdd}) => {
    return(
        <div className="inputTask">
            <form className="displayTask" onSubmit={(e) => handleAdd(e)}>
                <input className="inputArea" type='input' placeholder='Todo'  value={input} data-testid={"todoInput"} onChange={(e) => setInput(e.target.value)}/>
                <Button className="addButton" type='submit' variant="outline-info">Add</Button>
            </form>
        </div>
    )
}

export default InputField