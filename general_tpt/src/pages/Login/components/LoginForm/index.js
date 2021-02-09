import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import './index.scss';


const LoginForm = () => {
  // state
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // 
  const history = useHistory()
  // function
  const inputHandler = (e, key) => {
    if (key == 'username') {
      setUsername(e.target.value)
    } else if (key == 'password') {
      setPassword(e.target.value)
    }
  }

  const keyDownHandler = (e, key) => {
    if (e.key && e.key == 'Enter') {
      if (key == 'username') {
        document.querySelector(`[name='password']`).focus()
      } else if (key == 'password') {
        document.querySelector(`[name='login']`).click()
      }
    }
  }

  const checkAndJump = () => {
    if (username.trim() == '') {
      return
    } else if (password.trim() == '') {
      return
    }
    history.push('pages')
  }

  return (
    <div className="LoginForm" >
      <div className="projectLabel">General TPT</div>
      <span className="label">Username:</span>
      <input className="inputBox" value={username} name="username" onKeyDown={(e) => { keyDownHandler(e, 'username') }} onInput={(e) => { inputHandler(e, 'username') }}></input>
      <span className="label">Password:</span>
      <input className="inputBox" value={password} name="password" type="password" onInput={(e) => { inputHandler(e, 'password') }}></input>
      <button name="login" onClick={checkAndJump}>Login</button>
    </div>
  );
}

export default LoginForm;