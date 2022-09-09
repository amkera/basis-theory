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
  const { bt } = useBasisTheory("key_R9rUbjvfHJf1tsbk57zeSQ", {
    elements: true,
  })

  return (
    <BasisTheoryProvider bt={bt}>
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
    </BasisTheoryProvider>
  )
}

export default App
