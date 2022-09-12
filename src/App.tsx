import Customers from "./Components/Customers"
import Search from "./Components/Search"
import Form from "./Components/Form"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./Nav/Navbar"
import {
  BasisTheoryProvider,
  useBasisTheory,
} from "@basis-theory/basis-theory-react"
import CustomerPage from "./Components/CustomerPage"

const App = () => {
  const { bt } = useBasisTheory(
    `${process.env.REACT_APP_API_KEY_PUBLIC_BT_APPLICATION}`,
    {
      elements: true,
    }
  )

  return (
    <div className="container">
      <BasisTheoryProvider bt={bt}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/checkout" element={<Form />} />
            <Route path="/customers/:id" element={<CustomerPage />} />
            <Route
              path="/search"
              element={<Search firstName={""} lastName={""} />}
            />

            <Route path="/" element={<Customers />} />
          </Routes>
        </Router>
      </BasisTheoryProvider>
    </div>
  )
}

export default App
