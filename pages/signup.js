import React, { useState, useCallback } from 'react'
import axios from 'axios'

const initialState = {
  username: '',
  password: ''
}

export default function SignUp() {
  const [formState, setFormState] = useState(initialState)
  const submit = useCallback(async () => {
    const body = {
      username: formState.username,
      password: formState.password
    }

    await axios.post('http://localhost:3000/signup/', body, {
      withCredentials: true
    })

    window.location.href = '/learnings';
  }, [formState.username, formState.password])

  const handleUsernameChange = useCallback((event) => {
    setFormState({
      ...formState,
      username: event.target.value
    })
  }, [formState])

  const handlePasswordChange = useCallback((event) => {
    setFormState({
      ...formState,
      password: event.target.value
    })
  }, [formState])

  return (
    <>
      <input classname="username-field" onChange={handleUsernameChange}/>
      <br/>
      <input type="password" classname="password-field" onChange={handlePasswordChange}/>
      <br/>
      <button onClick={submit}>
        Signup
      </button>
    </>
  )
}

