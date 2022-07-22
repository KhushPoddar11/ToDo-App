import React from "react";
import { Input } from "./id";
import {ToggleButton} from "react-bootstrap";

interface Props{
    setItems:  React.Dispatch<React.SetStateAction<Input[]>>
}

const ClearButton = ({setItems}:Props) => {

    const handleClear = () => {
        setItems([])
    }

    return(
        <div>
            <ToggleButton value='' className="clearButton" variant="outline-secondary" onClick={handleClear}>Clear</ToggleButton>
        </div>
    )
}

export default ClearButton