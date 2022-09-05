import React from "react"
import Customer, { CustomerProps } from "./Customer"
import CustomerData from "./CustomerData"

const Customers = () => {
  const allCustomers = CustomerData
  return (
    <div>
      <section>
        <h2>All Customers</h2>
        {allCustomers.map((customer: CustomerProps) => (
          <Customer
            firstName={customer.firstName}
            lastName={customer.lastName}
          />
        ))}
      </section>
    </div>
  )
}

export default Customers
