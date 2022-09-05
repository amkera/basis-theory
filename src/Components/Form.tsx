import React, { useState } from "react"

const Form = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState("false")

  const handlePurcase = () => {
    console.log("handle purchase")
  }

  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"firstName"}>First Name</label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          id={"firstName"}
          value={firstName}
        ></input>
      </div>
      <div className="row">
        <label htmlFor={"lastName"}>Last Name</label>
        <input
          onChange={(e) => setLastName(e.target.value)}
          id={"firstName"}
          value={lastName}
        ></input>
      </div>
      <div className="button">
        <button onClick={handlePurcase}>Purchase</button>
      </div>
    </div>
  )
}

export default Form
