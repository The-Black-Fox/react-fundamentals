// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).

  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const inputRef = React.useRef(null)
  const [error, setError] = React.useState(false)
  const [userInput, setUserInput] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.dir(inputRef.current.value)
    alert(`Hello ${userInput}!`)
  }

  function handleChange(event) {
    let inputValue = event.target.value
    /*     let isValid = inputValue === inputValue.toLowerCase()
    setError(isValid ? false : 'Username must be lower case') */
    setUserInput(inputValue.toLowerCase())
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div id="input">
        <label>Username:</label>
        <input
          ref={inputRef}
          id="name"
          type="text"
          value={userInput}
          onChange={handleChange}
        />
      </div>
      <div id="error" style={{color: 'red'}}>
        {error}
      </div>
      <button disabled={Boolean(error)} id="submit" type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
