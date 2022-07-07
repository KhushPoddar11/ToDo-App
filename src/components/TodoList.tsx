import React from "react";
import {Input} from "./id";
import SingleTodo from "./SingleTodo";

interface Props{
    items: Input[]
    setItems:  React.Dispatch<React.SetStateAction<Input[]>>
}

const TodoList: React.FC<Props> = ({items, setItems}) => {
    return(
        <div>
            {items.map(item => (
                <SingleTodo input={item} key={item.id} items={items} setItems={setItems}/>
            ))}
        </div>
    )

}

export default TodoList