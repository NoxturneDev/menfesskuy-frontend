import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Message from "./pages/Message"
import Login from "./pages/Login"
import Register from "./pages/Register.js"
import Redirect from "./pages/Redirect"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/message/:user" element={<Message />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App