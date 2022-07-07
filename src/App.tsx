import React, {useEffect, useState} from 'react';
import './App.css';
import InputField from "./components/InputField";
import { Input} from "./components/id";
import TodoList from "./components/TodoList";
import ClearButton from "./components/ClearButton";

const getLocalItems = () => {

  let list = localStorage.getItem('lists')

  if(list) {
    return JSON.parse(localStorage.getItem('lists') || '')
  }else {
    return []
  }
}

const App:React.FC = () => {
  const [input, setInput] = useState<string>('')
  const [items, setItems] = useState<Input[]>(getLocalItems)

  useEffect(() => {
    localStorage.setItem('lists',JSON.stringify(items))
  },[items])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(input){
      setItems([...items,{id:Date.now(),input}])
      setInput('')
    }
  }

  return (
    <div className="App">
      <InputField input={input} setInput={setInput} handleAdd={handleAdd}/>
      <TodoList items={items} setItems={setItems}/>
      <ClearButton setItems={setItems}/>
    </div>
  );
}

export default App;
