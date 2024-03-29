import React, { useState } from "react";
import "./Modal.css";
const Modal = (props) => {
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [DOB, setDOB] = useState("");
  function handleModalForm(e) {
    e.stopPropagation();
  }

  function handleSubmit(e) {
    e.preventDefault();

    setPhoneNumber("");
    setDOB("");
    setEmailAddress("");
    setUsername("");
  }

  function handleButtonSubmit() {
    console.log("running")
      if(!emailAddress.includes("@")) {
          return alert("Invalid email .")
      }
    if (phoneNumber.length !== 10) {
      return alert(
        "Invalid phone number. Please enter a 10-digit phone number."
      );
    }
    if (
      new Date(new Date().toISOString().split("T")[0]) <
      new Date(DOB.split("T")[0])
    ) {
      return alert(
        "Invalid date of birth . Date of birth cannot be in the future."
      );
    }
  }
  return (
    <div className={"modal"} onClick={props.handleModal}>
      <form
        onSubmit={handleSubmit}
        onClick={handleModalForm}
        className={"modal-content"}
      >
        <h2>Fill Details</h2>
        <p>Username:</p>
        <input
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Email Address:</p>
        <input
          id="email"
          type="email"
          required
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <p>Phone Number:</p>
        <input
          id="phone"
          type="number"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <p>Date of Birth:</p>
        <input
          id="dob"
          type="datetime-local"
          required
          value={DOB}
          onChange={(e) => setDOB(e.target.value)}
        />
        <button
          type="submit"
          className="submit-button"
          onClick={handleButtonSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Modal;
