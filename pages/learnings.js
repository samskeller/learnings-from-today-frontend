import React, { useCallback } from 'react'
import axios from 'axios'
// import logo from './logo.svg'

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

export default NewLearning
