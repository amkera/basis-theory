import { useBasisTheory } from "@basis-theory/basis-theory-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CustomerProps } from "./Customer"
import CustomerData from "./CustomerData"
import Error from "./Error"

const Customers = () => {
  const allCustomers = CustomerData
  const [error, setError] = useState(false)

  const { bt } = useBasisTheory()

  useEffect(() => {
    try {
      setError(false)
      let tokens: any = bt?.tokens.list()
      console.log(tokens)
    } catch (e) {
      console.log(e)
      setError(true)
    }
  }, [bt?.tokens])

  return (
    <div>
      <section>
        <h2>View all customers</h2>
        {error ? (
          <Error />
        ) : (
          allCustomers.map((customer: CustomerProps) => (
            <p key={customer.id}>
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
