import React from "react"
import Customers from "./Components/Customers"
import Search from "./Components/Search"
import Form from "./Components/Form"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./Nav/Navbar"

const App = () => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/checkout" element={<Form />} />
          <Route path="/" element={<Customers />} />
          <Route
            path="/search"
            element={<Search firstName={""} lastName={""} />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
