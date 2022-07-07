import React, {useEffect, useState} from "react";


const getLocalItems = () => {

    let list = localStorage.getItem('lists')

    if(list) {
        return JSON.parse(localStorage.getItem('lists') || '')
    }else {
        return []
    }
}

function Todo(){
    const [x, setX]  = useState<string>('')
    const  [items, setItems]  = useState<string[]>(getLocalItems())

    //add an item on click
    //...items, to get the previously added list items too
    const addItem = () => {
        if(!x){
            alert('Enter a task')
        }else
        {
            setItems([...items,x])
            setX('')
        }
    }

    //delete an item on click
    //after deletion setItems should be updated too, therefore setItems(updatedItems)
    const deleteItem = (id:number) => {
        // console.log(id)
        const updatedItems = items.filter((ele, ind) => {
            return ind != id
        })

        setItems(updatedItems)
    }

    //clear list on click
    //return an empty array that contained the list item in this case setItems
    const clearItems = () => {
        setItems([])
    }

    //figuring out
    const editItem = () => {}

    // items is a dependency, as we only need to update the local storage when an item is added and not on every single change.
    useEffect(() => {
        localStorage.setItem('lists',JSON.stringify(items))
    },[items])

    useEffect(() => {
        document.title = 'Todo App';
    })

    return(
        <>
        <div>
            <h2>ToDo App</h2>
            <input type='text' placeholder='Todo items' value={x} onChange={e => setX(e.target.value)}/>
            <button onClick={addItem}>Add</button>
        </div>
            {/*show tasks*/}
            <div>
                {
                    //loop to render list items
                    items.map((element, index) => {
                        return(
                            <div key={index}>
                                <label >{ element }</label>
                                <button onClick={editItem}>Edit</button>
                                <button onClick={() => deleteItem(index)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button onClick={clearItems}>Clear</button>
            </div>
        </>
    )
}

export default Todo