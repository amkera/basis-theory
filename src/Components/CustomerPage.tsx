import { useParams } from "react-router-dom"
import Customer, { CustomerProps } from "./Customer"
import CustomerData from "./CustomerData"

const CustomerPage = () => {
  const allCustomers = CustomerData

  const { id } = useParams()

  const currentCustomer: CustomerProps = allCustomers.filter(
    (customer) => customer.id == id
  )[0]
  //Did not do strict eq to circumvent a type error

  return (
    <Customer
      id={currentCustomer.id}
      firstName={currentCustomer.firstName}
      lastName={currentCustomer.lastName}
    />
  )
}

export default CustomerPage
