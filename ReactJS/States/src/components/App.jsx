import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeHandler(event) {
    const { value } = event.target;

    if (event.target.name === "fName") {
      setContact((prevValue) => {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      });
    } else if (event.target.name === "lName") {
      setContact((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      });
    } else {
      setContact((prevValue) => {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      });
    }
  }

  function submitDataHandler(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={changeHandler}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={changeHandler}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={contact.email}
        />
        <button onClick={submitDataHandler}>Submit</button>
      </form>
    </div>
  );
}

export default App;
