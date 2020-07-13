import React from "react"
import { Link, navigate } from "gatsby"
import { useState } from "react"
import axios from "axios"

const Login = () => {
  const [registerData, setRegisterData] = useState(
    { 
      name: "",
      email: "",
      password: "",
    }
  )
  const [loginData, setLoginData] = useState(
    { 
      email: "",
      password: "",
    }
  )

  const handleRegister = async () => {
    try {
      await axios({
        method: 'post',
        url: 'http://localhost:3000/api/user/register',
        data: registerData
      })

      alert('Registered!')
    
    } catch (error) {
      alert(JSON.stringify(error.response.data))
    }
}

const handleLogin = async () => {
  axios.post('http://localhost:3000/api/user/login', loginData)
  .then((response) => {

    console.log(response.headers["auth-token"]);

    alert('Logged in!')
  }, (error) => {
    alert(JSON.stringify(error.response.data))
  });
}

  return (
    <>
    <h1>Login</h1>
    <div>
       <p>Register</p>
        <input placeholder="username" onChange={e => setRegisterData({...registerData, name: e.target.value})}/>
        <input placeholder="email" onChange={e => setRegisterData({...registerData, email: e.target.value})}/>
        <input placeholder="password" onChange={e => setRegisterData({...registerData, password: e.target.value})}/>
        <button onClick={handleRegister}>Register</button> 
    </div>
    <div>
       <p>Login</p>
        <input placeholder="email" onChange={e => setLoginData({...loginData, email: e.target.value})}/>
        <input placeholder="password" onChange={e => setLoginData({...loginData, password: e.target.value})}/>
        <button onClick={handleLogin}>Login</button> 
        <Link to="/">Forgot password?</Link>
    </div>
    <p>usernameChris@mail.com || passwordChris</p>
    </>
  )
}

export default Login

 