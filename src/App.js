import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
      </Route>
      <Route path="/dashboard" element={<Dashboard />}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App