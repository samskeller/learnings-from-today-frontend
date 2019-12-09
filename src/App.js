import React, { useCallback } from 'react'
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
      }
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
    <div classname="new-learning">
      <LearningTextArea/>
      <SubmitLearningButton/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <NewLearning/>
    </div>
  )
}

export default App
