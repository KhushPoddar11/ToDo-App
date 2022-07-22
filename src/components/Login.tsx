import React, {FormEvent, useState} from "react";

interface Props{

}

export const Login= () => {

    const [loginName, setLoginName] = useState<string>('');
    const [loginPassword, setLoginPassword] = useState<string>('');
    const [todo, setTodo] = useState<boolean>(true)

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault()
        let username= localStorage.getItem("authUsernames")?.replace(/"/g,"")
        let password = localStorage.getItem("authPasswords")?.replace(/"/g,"")

        if(!loginPassword || !loginName){
            alert('Enter all fields')
        }else if( loginPassword!== password || loginName!==username ){
            alert('Login Successful')
            setTodo(!todo)
        }

    }

    return(
        <div>
            {
                todo ?(
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Enter username' value={loginName} onChange={(e)=>setLoginName(e.target.value)}/>
                        <input type='password' placeholder='Enter password' value={loginPassword} onChange={(e)=> setLoginPassword(e.target.value)}/>
                        <button>Login</button>
                    </form>
                ):(
                    <h1>hi</h1>
                )
            }

        </div>

    )
}