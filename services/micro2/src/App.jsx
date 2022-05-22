import React from "react"
import Button from "./Button"

const App = (props) => (
  <div>
    <h1>Micro Service 2</h1>
    <Button />
    <br />
    <p>Communication Test</p>
    <input
      type="text"
      onChange={props.handleInputChange}
    />
  </div>
)

export default App
