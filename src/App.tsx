import Customers from "./Components/Customers"
import Search from "./Components/Search"
import Form from "./Components/Form"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./Nav/Navbar"
import {
  BasisTheoryProvider,
  useBasisTheory,
} from "@basis-theory/basis-theory-react"

const App = () => {
  const { bt } = useBasisTheory("key_MExmzCGrTouzxZXRGeSbKr", {
    elements: true,
  })
  return (
    <div className="container">
      <BasisTheoryProvider bt={bt}>
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
      </BasisTheoryProvider>
    </div>
  )
}

export default App
