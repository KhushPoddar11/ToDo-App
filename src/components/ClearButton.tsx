import React from "react";
import { Input } from "./id";

interface Props{
    setItems:  React.Dispatch<React.SetStateAction<Input[]>>
}

const ClearButton = ({setItems}:Props) => {

    const handleClear = () => {
        setItems([])
    }

    return(
        <div>
            <button onClick={handleClear}>Clear</button>
        </div>
    )
}

export default ClearButton