import React, {useEffect, useState, useCallback} from 'react';
import './App.css';
import InputField from "./components/InputField";
import { Input } from "./components/id";
import TodoList from "./components/TodoList";
import ClearButton from "./components/ClearButton";
import 'bootstrap/dist/css/bootstrap.min.css';


import { createNote, deleteNote} from './graphql/mutations'
import { listNotes } from './graphql/queries'
import { withAuthenticator, Button } from "@aws-amplify/ui-react";
import { API } from 'aws-amplify';

localStorage.removeItem("authUsername");
localStorage.removeItem("authPassword");
localStorage.removeItem("authCredentials")
// const getLocalItems = () => {
//
//   let list = localStorage.getItem('lists')
//
//   if(list) {
//     return JSON.parse(localStorage.getItem('lists') || '')
//   }else {
//     return []
//   }
// }

const App = (signOut:any )=> {
  const [input, setInput] = useState<string>('')
  const [items, setItems] = useState<Input[]>([])
  const [ notes, setNotes ] = useState([])

  const fetchNotes = useCallback(async () => {
    const result = await API.graphql({
      query: listNotes,
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    // @ts-ignore
    setNotes(result.data.listNotes.items)
  }, [setItems])

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  // useEffect(() => {
  //   localStorage.setItem('lists',JSON.stringify(items))
  // },[items])

  // const handleAdd = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if(input){
  //     setItems([...items,{id:Date.now(),input}])
  //     setInput('')
  //   }
  // }

  const handleAdd = useCallback(async (e: React.FormEvent) => {
    console.log(input)
    e.preventDefault();
    await API.graphql({
      query: createNote,
      variables: { input: { text: (input) } },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    fetchNotes()
  }, [fetchNotes])
  console.log(input)

  return (
    <div className="App card">
      <h3 className="head">ToDo App</h3>
      <InputField input={input} setInput={setInput} handleAdd={handleAdd}/>
      <TodoList items={items} setItems={setItems} fetchNotes={fetchNotes}/>
      <ClearButton setItems={setItems}/>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}

export default withAuthenticator(App);
