import React,{useState,useEffect} from "react";
import {credential} from "./id";
import {Login2} from "./Login2";

const getLocalCredentials = () => {

    let auth = localStorage.getItem('credentials')

    if(auth) {
        return JSON.parse(localStorage.getItem('credentials') || '')
    }else {
        return []
    }
}

export const SignPage =() => {

    const [{username, password}, setCredential] = useState({
        username:'',
        password:''
    });
    const [credentials, setCredentials] = useState<credential[]>(getLocalCredentials);
    const[done, setDone]  = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem('credentials',JSON.stringify(credentials))
    },[credentials])

    const handleClick = (e:React.FormEvent) => {
        if(username && password){
            e.preventDefault()
            setCredentials([...credentials,{username,password}])
            setDone(!done)
        }else{
            alert('Enter all fields')
        }

    }



    return(
            <div>
            {
                !   done?(<form onSubmit={handleClick}>
                    <input type='text' placeholder='username'value={username} onChange={(e) => setCredential({
                        username : e.target.value,
                        password
                    })}/>
                    <input type='password' placeholder='password' value={password} onChange={(e)=> setCredential({
                        password: e.target.value,
                        username
                    })}/>
                    <button>Sign in</button>
                </form>):(
                    <Login2 />
                )
            }
            </div>

    )
}