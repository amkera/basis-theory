import {
  BasisTheoryProvider,
  useBasisTheory,
} from "@basis-theory/basis-theory-react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CustomerPage from "./Components/CustomerPage"
import Customers from "./Components/Customers"
import Form from "./Components/Form"
import Search from "./Components/Search"
import NavBar from "./Nav/Navbar"

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
