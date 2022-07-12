import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Message from "./pages/Message"
import Login from "./pages/Login"
import Register from "./pages/Register.js"

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
      </Route>
      <Route path="/dashboard" element={<Dashboard />}>
      </Route>
      <Route path="/message/:user" element={<Message />}>
      </Route>
      <Route path="/register" element={<Register />}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App