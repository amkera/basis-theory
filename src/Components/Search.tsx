import React, { useState } from "react"
import Customer, { CustomerProps } from "./Customer"
import CustomerData from "./CustomerData"

const Search = (props: CustomerProps) => {
  const [query, setQuery] = useState("")

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value.toLowerCase())
  }

  const allCustomers = CustomerData

  const searchByName = () => {
    return allCustomers.filter((customer) =>
      customer.lastName.toLowerCase().includes(query.toLowerCase())
    )
  }

  return (
    <div>
      <input
        type="text"
        name="customer-name"
        placeholder="Search By Last Name"
        value={query}
        onChange={handleOnChange}
      ></input>
      <div>
        <strong>All Customers</strong>
        <div>
          {searchByName().map((customer: CustomerProps) => (
            <Customer
              firstName={customer.firstName}
              lastName={customer.lastName}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search
