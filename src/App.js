import { Routes, Route } from "react-router-dom"
import { Login, Main, Register } from "./components"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App