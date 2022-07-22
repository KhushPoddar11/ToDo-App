import React, {useState} from "react";

export const Login2 = () => {

    const [{loginUsername, loginPassword}, setCredential] = useState({
        loginUsername:'',
        loginPassword:''
    });

    const handleSubmit= (e:React.FormEvent) => {
        e.preventDefault()
        let credential= JSON.parse(localStorage.getItem("credentials")?.replace(/"/g,"") || '')
        let usernameX = credential.username
        let passwordY = credential.password


        if(!loginPassword || !loginUsername){
            alert('Enter all fields')
        }else if(loginUsername == usernameX){
            alert('login successful')
        }
    }




    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='username' value={loginUsername} onChange={(e) => setCredential({
                    loginUsername: e.target.value,
                    loginPassword
                })}/>
                <input type='password' placeholder='password' value={loginPassword} onChange={(e) => setCredential({
                    loginPassword: e.target.value,
                    loginUsername
                })}/>
                <button>Login</button>
            </form>
        </div>
    )
}