import CustomerData from "./CustomerData"
import Error from "./Error"
import Customer, { CustomerProps } from "./Customer"
import { Route, Link, Routes, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useBasisTheory } from "@basis-theory/basis-theory-react"

const Customers = () => {
  const allCustomers = CustomerData
  const [error, setError] = useState(false)

  const { bt } = useBasisTheory()

  useEffect(() => {
    try {
      setError(false)
      let tokens: any = bt?.tokens.list()
    } catch (e) {
      console.log(e)
      setError(true)
    }
  }, [bt?.tokens])

  return (
    <div>
      <section>
        <h2>All Customers</h2>
        {error ? (
          <Error />
        ) : (
          allCustomers.map((customer: CustomerProps) => (
            <p>
              <Link to={`/customers/${customer.id}`}>
                {customer.firstName} {customer.lastName}
              </Link>
            </p>
          ))
        )}
      </section>
    </div>
  )
}

export default Customers
