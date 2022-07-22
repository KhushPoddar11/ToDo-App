import React,{useEffect} from "react";
import {Login} from "./Login";

interface Props{
    username: string
    password1: string
    password2: string
    usernames: string[]
    passwords:string[]
    login:boolean
    setLogin:  React.Dispatch<React.SetStateAction<boolean>>
    setPasswords: React.Dispatch<React.SetStateAction<string[]>>
    setUsernames:  React.Dispatch<React.SetStateAction<string[]>>
    setUsername:  React.Dispatch<React.SetStateAction<string>>
    setPassword1:  React.Dispatch<React.SetStateAction<string>>
    setPassword2:  React.Dispatch<React.SetStateAction<string>>
}

export const Signup: React.FC<Props> = ({username,setUsername, password1,setPassword1, password2,setPassword2, usernames, setUsernames, passwords, setPasswords, login, setLogin}) => {

    useEffect(() => {
        localStorage.setItem('authUsername',JSON.stringify(usernames))
    },)

    useEffect(() => {
        localStorage.setItem('authPassword', JSON.stringify(passwords))
    },)

    let credentials:Array<string>= JSON.parse(localStorage.getItem('authCredentials') || "[]")
    let credential ={
        username:username,
        password:password1
    }
    // credentials.push(credential)

    useEffect(() => {
        localStorage.setItem('authCredentials', JSON.stringify(credentials))
    },)

    const handleSubmit= (e: React.FormEvent) => {
        e.preventDefault()
        if(password1==password2 && username){
            setUsernames([...usernames,username])
            setPasswords([...passwords,password1])
            setLogin(!login)
        }else {
            alert('Fill credentials properly')
        }
    }

    return(
        <div>
            {!login ? (
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Username' value={username}
                               onChange={e => setUsername(e.target.value)}/>
                        <input type='password' placeholder='Password' value={password1}
                               onChange={e => setPassword1(e.target.value)}/>
                        <input type='password' placeholder='Confirm Password' value={password2}
                               onChange={e => setPassword2(e.target.value)}/>
                        <button>Sign up</button>
                    </form>
                ) :
                (
                    <Login />
                )
            }

        </div>
    )
}