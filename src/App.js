import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from "./pages/home/Dashboard";
import Message from "./pages/messages/Message"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import SendMessage from "./pages/messages/SendMessage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
        <Route path="/message/:user" element={<Message />}>
        </Route>
        <Route path="/send/menfess/:user" element={<SendMessage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App