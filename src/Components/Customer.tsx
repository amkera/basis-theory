export type CustomerProps = {
  id?: number
  firstName: string
  lastName: string
}
const Customer = ({ firstName, lastName }: CustomerProps) => {
  return (
    <ul>
      <p>{`${firstName} ${lastName}`}</p>
    </ul>
  )
}

export default Customer
