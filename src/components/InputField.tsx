import React from "react";

interface Props{
    input:string
    setInput: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({input, setInput, handleAdd}) => {
    return(
        <div>
            <form onSubmit={(e) => handleAdd(e)}>
                <input type='input' placeholder='Todo' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default InputField