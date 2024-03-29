import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Modal'

function App() {
  const [openModal, setOpenModal] = useState(false)

  function handleModal() {
    setOpenModal((value) => !value)
  }
  return (
    <>
    <div className={"modal"}>

    <h1>User Details Modal</h1>
    <button onClick={() => {setOpenModal((value) => !value)}}>Open Form</button>
    {openModal ? <Modal handleModal={handleModal}></Modal> : null}
    </div>
    </>
  )
}

export default App
