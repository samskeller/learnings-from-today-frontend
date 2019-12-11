import React, { useState, useCallback } from 'react'
import axios from 'axios'
// import logo from './logo.svg'
import './App.css'

function SubmitLearningButton() {
  const onClick = useCallback(() => {
    const body = {
      learning: 'This is a test',
      date: '2019-01-01'
    }
    axios.post('http://localhost:3000/learnings/', body, {
      headers: {
        cookie: 'test;'
      },
      withCredentials: true
    })
  }, [])

  return (
    <button
      onClick={onClick}
    >
      Submit
    </button>
  )
}

function LearningTextArea() {
  return (
    <textarea/>
  )
}

function NewLearning() {
  return (
    <>
      <LearningTextArea/>
      <SubmitLearningButton/>
    </>
  )
}

const initialState = {
  username: '',
  password: ''
}

function LogIn() {
  const [formState, setFormState] = useState(initialState)
  const submit = useCallback(async () => {
    const body = {
      username: formState.username,
      password: formState.password
    }

    await axios.post('http://localhost:3000/login/', body, {
      withCredentials: true
    })
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
        Submit
      </button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <LogIn/>
    </div>
  )
}

export default App
