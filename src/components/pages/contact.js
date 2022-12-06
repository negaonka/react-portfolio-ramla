import React, { useState } from "react";


const styles = {
  container: {
    width: "70%",
    marginTop: "5%",
  },
  form: {
    marginLeft: "20%",
    marginRight: "auto",
    paddingTop: "5%",
    padding: "5%",
    width: '100%',
    

  },
  name: {
    border: "none",
    borderBottom: "2px solid pink",
 
  },
  email: {
    border: "none",
    borderBottom: "1px solid pink",
  },
  message: {
    width: "100%",
    height: "100px",
    marginTop: "5%",
    border: "none",
  },
  button: {
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: "10px",
    padding: "5%"
  },
};

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.inputValue;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputType);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !message) {
      setErrorMessage("Please complete all of the fields");
      return;
    }
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <div>
          <input
            style={styles.name}
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            style={styles.email}
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            style={styles.message}
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />
        </div>
        <button type="button" onClick={handleFormSubmit} style={styles.button}>
          {" "}
          Send
        </button>
      {errorMessage && (
        <div>
          <p className="error-text"> {errorMessage}</p>
        </div>
      )}
      </form>

    </div>
  );
}